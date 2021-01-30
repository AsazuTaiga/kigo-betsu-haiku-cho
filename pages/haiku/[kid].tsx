import { NextPage } from 'next'
import router from 'next/router'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import AppHeader from '../../components/headers/app-header'
import KigoDetail from '../../components/texts/kigo-detail'
import spring from '../../kigo-resource/spring'
import summer from '../../kigo-resource/summer'
import fall from '../../kigo-resource/fall'
import winter from '../../kigo-resource/winter'
import newYear from '../../kigo-resource/newYear'
import WriteHaikuButton from '../../components/buttons/write-haiku-button'
import HaikuForm from '../../components/forms/haiku-form'

const Haiku: NextPage = () => {
  // 初期処理：ログインチェック
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  const kid = location.pathname.substring(
    location.pathname.lastIndexOf('/') + 1
  )
  useEffect(() => {
    !currentUser && router.push('/log-in')
  })

  // パスパラメータの季語ID(kid)をもとに季語データを取得
  const kigo =
    spring.find((k) => String(k.id) === kid) ||
    summer.find((k) => String(k.id) === kid) ||
    fall.find((k) => String(k.id) === kid) ||
    winter.find((k) => String(k.id) === kid) ||
    newYear.find((k) => String(k.id) === kid)
  // 該当する季語IDの季語が存在しない場合は一覧画面へ移動
  if (!kigo) {
    router.push('/kigo')
  }

  // 状態
  const [isNewHaikuWriting, setIsNewHaikuWriting] = useState(false)
  return (
    <>
      {currentUser && kigo ? (
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
          `}</style>
        </>
      ) : null}
    </>
  )
}

const dynamicHaiku = dynamic(
  {
    loader: async () => Haiku,
  },
  {
    ssr: false,
  }
)

export default dynamicHaiku
