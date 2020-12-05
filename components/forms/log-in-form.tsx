import { useState } from 'react'
import { useRouter } from 'next/router'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import ValidationInput from '../inputs/validation-input'
import LogInButton from '../buttons/log-in-button'
import Validator from './validator'

const LogInForm: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [emailValidationMessage, setEmailValidationMessage] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    resetValidationState()
    if (!validateEmail() || !validatePasswordEmpty()) {
      return
    }
    setIsLoading(true)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        sessionStorage.setItem('currentUser', JSON.stringify(response))
        router.push('/kigo')
      })
      .catch((error) => {
        setIsLoading(false)
        if (error.code === 'auth/user-not-found') {
          setIsEmailInvalid(true)
          setEmailValidationMessage(
            'ユーザーが存在しません。メールアドレスを確認してください。'
          )
        }
        if (error.code === 'auth/wrong-password') {
          setIsPasswordInvalid(true)
          setPasswordValidationMessage('パスワードが違います。')
        }
        if (error.code === 'auth/too-many-requests') {
          setIsPasswordInvalid(true)
          setPasswordValidationMessage(
            'リクエスト過多のため一時的に制限されています。'
          )
        }
      })
  }

  const resetValidationState = () => {
    setIsEmailInvalid(false)
    setEmailValidationMessage('')
    setIsPasswordInvalid(false)
    setPasswordValidationMessage('')
  }

  const validateEmail = () => {
    const emailValidationResult = Validator.test(email, 'email')
    if (!emailValidationResult.result) {
      setIsEmailInvalid(true)
      setEmailValidationMessage(emailValidationResult.message)
    } else {
      setIsEmailInvalid(false)
      setEmailValidationMessage('')
    }
    return emailValidationResult.result
  }

  const validatePasswordEmpty = () => {
    const passwordValidationResult = Validator.testEmpty(password, 'password')
    if (!passwordValidationResult.result) {
      setIsPasswordInvalid(true)
      setPasswordValidationMessage(passwordValidationResult.message)
    } else {
      setIsPasswordInvalid(false)
      setPasswordValidationMessage('')
    }
    return passwordValidationResult.result
  }

  return (
    <>
      <form className="logInForm" onSubmit={handleSubmit}>
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
        <LogInButton isLoading={isLoading}></LogInButton>
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
