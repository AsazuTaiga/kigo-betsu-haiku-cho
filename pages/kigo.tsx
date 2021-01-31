import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import router from 'next/router'
import AppHeader from '../components/headers/app-header'
import KigoTab from '../components/tabs/kigo-tab'
import firebase from 'firebase'

const KigoPage: NextPage = () => {
  const [credential, setCredential] = useState<firebase.auth.UserCredential>()

  useEffect(() => {
    const userCredentialStr = sessionStorage.getItem('userCredential')
    if (!userCredentialStr) {
      router.push('log-int')
      return
    }
    const userCredential = JSON.parse(userCredentialStr)
    setCredential(userCredential)
  }, [])

  return (
    <>
      <Head>
        <title>季語一覧・検索 - 季語別俳句帖</title>
      </Head>
      {credential ? (
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

export default KigoPage
