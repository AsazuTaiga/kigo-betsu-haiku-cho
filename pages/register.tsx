import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import RegisterForm from '../components/forms/register-form'
import DataLicense from '../components/texts/data-license'
import colors from '../colors.json'
import { useEffect, useState } from 'react'
import router from 'next/router'
import firebase from 'firebase/app'
import 'firebase/auth'

const Register: NextPage = () => {
  const [credential, setCredential] = useState<firebase.auth.UserCredential>()
  useEffect(() => {
    const userCredentialStr = sessionStorage.getItem('userCredential')
    if (!userCredentialStr) {
      router.push('/log-in')
      return
    }
    const userCredential = JSON.parse(userCredentialStr)
    userCredential && router.push('/kigo')
    setCredential(userCredential)
  }, [])

  return (
    <>
      {!credential ? (
        <>
          <Head>
            <title>ログイン - 季語別俳句帖</title>
          </Head>
          <div className="container">
            <img
              className="topLogo"
              src="top-logo.svg"
              alt="季語別俳句帖"
            ></img>
            <RegisterForm />
            <Link href="/reset-password">
              <span className="link">パスワードをお忘れですか？</span>
            </Link>
            <Link href="/log-in">
              <span className="link">ログイン</span>
            </Link>
            <DataLicense />
          </div>
          <style jsx>{`
            .container {
              display: flex;
              flex-direction: column;
              width: 100vw;
              min-height: 100vh;
              justify-content: center;
              align-items: center;
              padding: 20px;
            }
            .topLogo {
              width: 280px;
              max-width: 90%;
              margin-bottom: 20px;
            }
            .link {
              font-size: 14px;
              text-decoration: none;
              color: ${colors.primary};
              cursor: pointer;
              margin-bottom: 8px;
            }
            .link:active {
              text-decoration: underline ${colors.primary};
            }
          `}</style>
          <style jsx global>{`
            .validationInput {
              margin-bottom: 8px;
            }
            .logInForm {
              margin-bottom: 20px;
            }
            .dataLicense {
              margin-top: 20px;
            }
          `}</style>
        </>
      ) : null}
    </>
  )
}

export default Register
