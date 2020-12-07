import { NextPage } from 'next'
import router from 'next/router'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import AppHeader from '../../components/headers/app-header'
import KigoDetail from '../../components/texts/kigo-detail'
import spring from '../../kigo-resource/spring.json'
import summer from '../../kigo-resource/summer.json'
import fall from '../../kigo-resource/fall.json'
import winter from '../../kigo-resource/winter.json'
import newYear from '../../kigo-resource/newYear.json'
import WriteHaikuButton from '../../components/buttons/write-haiku-button'
import HaikuAddTextArea from '../../components/textareas/haiku-add-textarea'

const Haiku: NextPage = () => {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  const kid = location.pathname.substring(
    location.pathname.lastIndexOf('/') + 1
  )
  useEffect(() => {
    !currentUser && router.push('/log-in')
  })
  const kigo =
    (spring.find((k) => String(k.id) === kid) as Kigo) ||
    (summer.find((k) => String(k.id) === kid) as Kigo) ||
    (fall.find((k) => String(k.id) === kid) as Kigo) ||
    (winter.find((k) => String(k.id) === kid) as Kigo) ||
    (newYear.find((k) => String(k.id) === kid) as Kigo)
  if (!kigo) {
    router.push('/kigo')
  }
  return (
    <>
      {currentUser && kigo ? (
        <>
          <div className="container">
            <AppHeader />
            <main>
              <KigoDetail kigo={kigo}></KigoDetail>
              <WriteHaikuButton
                onClick={() => window.alert('hoge')}
                visibility="visible"
                isDisabled={false}
              />
              <HaikuAddTextArea
                onChange={() => null}
                visibility={'visible'}
                isDisabled={false}
              />
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
            .writeHaikuButton {
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
