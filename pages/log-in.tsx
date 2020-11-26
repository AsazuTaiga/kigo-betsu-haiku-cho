import { NextPage } from 'next'
import Link from 'next/link'
import LogInForm from '../components/forms/log-in-form'
import DataLicense from '../components/texts/data-license'
import colors from '../colors.json'

const Login: NextPage = () => {
  return (
    <>
      <div className="container">
        <img className="topLogo" src="/top-logo.svg"></img>
        <LogInForm />
        <Link href="/reset-password">
          <span className="link">パスワードをお忘れですか？</span>
        </Link>
        <Link href="/sign-up">
          <span className="link">新規登録</span>
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
        .link:hover {
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
  )
}
export default Login
