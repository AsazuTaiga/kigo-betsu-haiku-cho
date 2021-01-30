import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import router from 'next/router'
import AppHeader from '../components/headers/app-header'
import KigoTab from '../components/tabs/kigo-tab'
import dynamic from 'next/dynamic'

const Kigo: NextPage = () => {
  const currentUser =
    sessionStorage.getItem('userCredential') &&
    JSON.parse(sessionStorage.getItem('userCredential'))
  useEffect(() => {
    !currentUser && router.push('/log-in')
  })

  return (
    <>
      <Head>
        <title>季語一覧・検索 - 季語別俳句帖</title>
      </Head>
      {currentUser ? (
        <>
          <div className="container">
            <AppHeader />
            <main>
              <KigoTab />
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
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
              max-width: 800px;
            }
          `}</style>
        </>
      ) : null}
    </>
  )
}

const DynamicKigo = dynamic(
  {
    loader: async () => Kigo,
  },
  {
    ssr: false,
  }
)

export default DynamicKigo
