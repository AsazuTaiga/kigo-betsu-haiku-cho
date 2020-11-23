import { useState } from 'react'
import ValidationInput from '../inputs/validation-input'
import LogInButton from '../buttons/log-in-button'

const LogInForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [emailValidationMessage, setEmailValidationMessage] = useState(
    'メールアドレスを入力してください。'
  )
  const [password, setPassword] = useState('')
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)
  const [passwordValidationMessage, setPasswordValidationMessage] = useState(
    'パスワードを入力してください。'
  )

  const onLogInButtonClick: OnClick = (clickEvent) => {
    clickEvent.preventDefault()
    handleLogin()
  }

  // wip
  const handleLogin = () => {
    window.alert(`Eメールは${email}で、\nパスワードは${password}ですね！`)

    setIsEmailInvalid(true)
    setIsPasswordInvalid(true)
    setEmailValidationMessage('メールアドレスの形式を確認してください。')
    setPasswordValidationMessage('パスワードが短すぎます。')
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
      <style jsx-global>{`
        .logInForm button, .logInForm input {
          width: 100%;
        }
        `}</style>
    </>
  )
}

export default LogInForm
