import { NextPage } from 'next'
import AppHeader from '../../components/headers/app-header'
import KigoDetail from '../../components/texts/kigo-detail'

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
