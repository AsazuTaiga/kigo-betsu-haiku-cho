import { NextPage } from 'next'
import AppHeader from '../../components/headers/app-header'
import KigoDetail from '../../components/texts/kigo-detail'

//wip
import WriteHaikuButton from '../../components/buttons/write-haiku-button'

const Kigo: NextPage = () => {
  return (
    <>
      <div className="container">
        <AppHeader />
        <main>
          <KigoDetail
            kigo={{
              id: 1,
              name: 'あああああ',
              kyukana: 'ほげほげ',
              yomigana: 'おおおお',
              season: 'spring',
              bodai: ['test'],
            }}
          ></KigoDetail>
          <WriteHaikuButton
            onClick={() => window.alert('hoge')}
            visibility="visible"
            isDisabled={false}
          ></WriteHaikuButton>
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
      `}</style>
    </>
  )
}

export default Kigo
