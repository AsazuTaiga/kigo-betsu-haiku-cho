import { NextPage } from 'next'
import router from 'next/router'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import AppHeader from '../../components/headers/app-header'
import KigoDetail from '../../components/texts/kigo-detail'
import spring from '../../kigo-resource/spring'
import summer from '../../kigo-resource/summer'
import fall from '../../kigo-resource/fall'
import winter from '../../kigo-resource/winter'
import newYear from '../../kigo-resource/newYear'
import WriteHaikuButton from '../../components/buttons/write-haiku-button'
import HaikuForm from '../../components/forms/haiku-form'
import HaikuEditTextarea from '../../components/textareas/haiku-edit-textarea'

const Haiku: NextPage = () => {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  const kid = location.pathname.substring(
    location.pathname.lastIndexOf('/') + 1
  )

  // 未ログインの場合はログイン画面へ
  useEffect(() => {
    !currentUser && router.push('/log-in')
  })

  // 季語データ
  const kigo =
    spring.find((k) => String(k.id) === kid) ||
    summer.find((k) => String(k.id) === kid) ||
    fall.find((k) => String(k.id) === kid) ||
    winter.find((k) => String(k.id) === kid) ||
    newYear.find((k) => String(k.id) === kid)

  // 該当する季語データがない場合
  useEffect(() => {
    if (!kigo) {
      router.push('/kigo')
    }
  }, [kigo])

  // states
  const [isAdding, setIsAdding] = useState(false)

  return (
    <>
      {currentUser && kigo ? (
        <>
          <div className="container">
            <AppHeader />
            <main>
              <KigoDetail kigo={kigo}></KigoDetail>
              <div className="addHaikuWrapper">
                <WriteHaikuButton
                  onClick={() => {
                    setIsAdding(true)
                  }}
                  isShown={!isAdding}
                  isDisabled={false}
                />
                <HaikuForm
                  onCancel={() => {
                    setIsAdding(false)
                  }}
                  isShown={isAdding}
                  isDisabled={false}
                  kid={kid}
                ></HaikuForm>
              </div>
              <div>
                <HaikuEditTextarea haiku="古池や蛙飛び込む水の音"></HaikuEditTextarea>
              </div>
            </main>
          </div>

          <style jsx>{`
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
            .addHaikuWrapper {
              margin-top: 30px;
              display: flex;
              flex-direction: column;
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
