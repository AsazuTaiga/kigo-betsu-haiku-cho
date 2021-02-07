import { NextPage } from 'next'
import router from 'next/router'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import AppHeader from '../../components/headers/app-header'
import KigoDetail from '../../components/texts/kigo-detail'
import spring from '../../kigo-resource/spring'
import summer from '../../kigo-resource/summer'
import fall from '../../kigo-resource/fall'
import winter from '../../kigo-resource/winter'
import newYear from '../../kigo-resource/newYear'
import WriteHaikuButton from '../../components/buttons/write-haiku-button'
import HaikuForm from '../../components/forms/haiku-form'
import { Haiku, HaikuResponse } from '../../types/haiku'
import HaikuList from '../../components/haiku-list/haiku-list'

const HaikuDetailPage: NextPage = () => {
  // state
  const [isNewHaikuWriting, setIsNewHaikuWriting] = useState(false)
  const [haikuList, setHaikuList] = useState<Haiku[]>([])
  const [credential, setCredential] = useState<firebase.auth.UserCredential>()
  const [isLoading, setIsLoading] = useState(true)

  // path parameter
  const kid = location.pathname.substring(
    location.pathname.lastIndexOf('/') + 1
  )

  useEffect(() => {
    const userCredentialStr = sessionStorage.getItem('userCredential')
    if (!userCredentialStr) {
      router.push('/log-in')
      return
    }
    const credential: firebase.auth.UserCredential = JSON.parse(
      userCredentialStr
    )
    setCredential(credential)
    // 未ログインの場合はログイン画面へ

    // 対象季語データの取得
    const userId = credential.user?.uid
    const db = firebase.database()
    db.ref(`users/${userId}/haiku/${kid}`).on('value', (snapshot) => {
      const res = snapshot.val() as HaikuResponse
      if (!res) {
        setIsLoading(false)
        return
      }

      // データの成型とセット
      const formatted = Object.entries(res).map(([id, haiku]) => {
        return {
          id: id,
          haiku: haiku.haiku,
          createdAt: haiku.createdAt,
        } as Haiku
      })
      setHaikuList(formatted)
      setIsLoading(false)
    })
  }, [])

  // パスパラメータの季語ID(kid)をもとに季語データを取得
  const kigo =
    spring.find((k) => String(k.id) === kid) ||
    summer.find((k) => String(k.id) === kid) ||
    fall.find((k) => String(k.id) === kid) ||
    winter.find((k) => String(k.id) === kid) ||
    newYear.find((k) => String(k.id) === kid)

  useEffect(() => {
    // 該当する季語データがない場合
    if (!kigo) {
      router.push('/kigo')
    }
  }, [kigo])

  // イベントハンドラ
  // 編集後の俳句をDBに登録
  const saveEdittedHaiku = (edittedHaiku: string, updateTarget: Haiku) => {
    const userId = credential?.user?.uid
    const db = firebase.database()
    const updates = {
      haiku: edittedHaiku,
      createdAt: updateTarget.createdAt,
    }
    db.ref(`users/${userId}/haiku/${kid}/${updateTarget.id}`).update(updates)
  }

  // 俳句の削除
  const deleteHaiku = (delteTarget: Haiku) => {
    const userId = credential?.user?.uid
    const db = firebase.database()
    db.ref(`users/${userId}/haiku/${kid}/${delteTarget.id}`).remove()
  }

  return (
    <>
      {credential && kigo ? (
        <>
          <div className="container">
            <AppHeader />
            <main>
              <KigoDetail kigo={kigo}></KigoDetail>
              <WriteHaikuButton
                onClick={() => setIsNewHaikuWriting(true)}
                isDisabled={false}
                isShown={!isNewHaikuWriting}
              />

              <HaikuForm
                onCancel={() => {
                  setIsNewHaikuWriting(false)
                }}
                isShown={isNewHaikuWriting}
                isDisabled={false}
                kid={kid}
              ></HaikuForm>
              {isLoading ? (
                <div className="loading">
                  <img src="/three-dots.svg" alt="loading"></img>
                </div>
              ) : (
                <HaikuList
                  haikuDataList={haikuList}
                  onSumitHandler={saveEdittedHaiku}
                  onDeleteHandler={deleteHaiku}
                ></HaikuList>
              )}
            </main>
          </div>

          <style jsx global>{`
            .container {
              margin-top: 56px;
              padding: 0 2rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            main {
              padding-top: 20px;
              width: 100%;
              display: flex;
              flex-direction: column;
              max-width: 800px;
            }
            .writeHaikuButton,
            .haikuForm {
              margin-top: 30px;
            }
            .loading {
              margin-top: 60px;
              width: 100%;
              display: flex;
              justify-content: center;
            }
            .loading img {
              width: 80px;
              filter: invert(0.3);
            }
          `}</style>
        </>
      ) : null}
    </>
  )
}

const dynamicHaikuDetailPage = dynamic(
  {
    loader: async () => HaikuDetailPage,
  },
  {
    ssr: false,
  }
)

export default dynamicHaikuDetailPage
