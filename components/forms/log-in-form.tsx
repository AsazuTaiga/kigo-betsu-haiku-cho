import { useState } from 'react'
import { useRouter } from 'next/router'
import ValidationInput from '../inputs/validation-input'
import LogInButton from '../buttons/log-in-button'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import Validator from './validator'

const LogInForm: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [emailValidationMessage, setEmailValidationMessage] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('')

  const onLogInButtonClick: OnClick = (clickEvent) => {
    clickEvent.preventDefault()
    handleLogin()
  }

  const handleLogin = () => {
    if (!validate()) {
      return
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        window.alert(response)
        router.push('/kigo')
      })
      .catch((error) => window.alert(error))
  }

  const validate = () => {
    const emailValidationResult = Validator.test(email, 'email')
    const passwordValidationResult = Validator.test(password, 'password')
    if (!emailValidationResult.result) {
      setIsEmailInvalid(true)
      setEmailValidationMessage(emailValidationResult.message)
    } else {
      setIsEmailInvalid(false)
      setEmailValidationMessage('')
    }
    if (!passwordValidationResult.result) {
      setIsPasswordInvalid(true)
      setPasswordValidationMessage(passwordValidationResult.message)
    } else {
      setIsPasswordInvalid(false)
      setPasswordValidationMessage('')
    }
    return emailValidationResult.result && passwordValidationResult.result
  }

  return (
    <>
      <form className="logInForm">
        <ValidationInput
          validationMessage={emailValidationMessage}
          placeholder="メールアドレス"
          name="email"
          type="email"
          isInvalid={isEmailInvalid}
          onChange={(changeEvent) => setEmail(changeEvent.target.value)}
        />
        <ValidationInput
          validationMessage={passwordValidationMessage}
          placeholder="パスワード"
          name="password"
          type="password"
          isInvalid={isPasswordInvalid}
          onChange={(changeEvent) => setPassword(changeEvent.target.value)}
        />
        <LogInButton onClick={onLogInButtonClick}></LogInButton>
      </form>
      <style jsx>{`
        .logInForm {
          width: 100%;
          max-width: 400px;
        }
      `}</style>
      <style jsx-global="true">{`
        .logInForm button, .logInForm input {
          width: 100%;
        }
        `}</style>
    </>
  )
}

export default LogInForm
