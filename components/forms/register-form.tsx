import { useState } from 'react'
import { useRouter } from 'next/router'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import ValidationInput from '../inputs/validation-input'
import AgreementCheckbox from '../checkboxes/agreement-checkbox'
import RegisterButton from '../buttons/register-button'
import Validator from './validator'

const RegisterForm: React.FC = () => {
  const router = useRouter()
  // email
  const [email, setEmail] = useState('')
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [emailValidationMessage, setEmailValidationMessage] = useState('')
  // password
  const [password, setPassword] = useState('')
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('')
  // agreement
  const [isAgreementChecked, setIsAgreementChecked] = useState(false)
  const [isAgreementInvalid, setIsAgreementInvalid] = useState(false)
  // loading
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit: OnSubmit = (event) => {
    event.preventDefault()
    resetValidationState()
    const isValidEmail = validateEmail()
    const isValidPassword = validatePassword()
    const isValidAgreement = validateAgreement()
    if (!isValidEmail || !isValidPassword || !isValidAgreement) {
      return
    }
    setIsLoading(true)
    createUser()
      .then(logIn)
      .then(handleSuccess)
      .catch((error) => {
        handleFail(error)
        setIsLoading(false)
      })
  }

  const resetValidationState = () => {
    setIsEmailInvalid(false)
    setEmailValidationMessage('')
    setIsPasswordInvalid(false)
    setPasswordValidationMessage('')
    setIsAgreementInvalid(false)
  }

  const validateEmail = () => {
    const emailValidationResult = Validator.test(email, 'email')
    if (!emailValidationResult.isValid) {
      setIsEmailInvalid(true)
      setEmailValidationMessage(emailValidationResult.message)
    } else {
      setIsEmailInvalid(false)
      setEmailValidationMessage('')
    }
    return emailValidationResult.isValid
  }

  const validatePassword = () => {
    const passwordValidationResult = Validator.test(password, 'password')
    if (!passwordValidationResult.isValid) {
      setIsPasswordInvalid(true)
      setPasswordValidationMessage(passwordValidationResult.message)
    } else {
      setIsPasswordInvalid(false)
      setPasswordValidationMessage('')
    }
    return passwordValidationResult.isValid
  }

  const validateAgreement = () => {
    setIsAgreementInvalid(!isAgreementChecked)
    return isAgreementChecked
  }

  const createUser = async () => {
    return await firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  const logIn = async () => {
    return await firebase.auth().signInWithEmailAndPassword(email, password)
  }

  const handleSuccess = (response) => {
    sessionStorage.setItem('currentUser', JSON.stringify(response))
    router.push('/kigo')
  }

  const handleFail = (error) => {
    switch (error.code) {
      case 'auth/email-already-in-use': {
        setIsEmailInvalid(true)
        setEmailValidationMessage('このメールアドレスは既に使用されています。')
        break
      }
      default: {
        setIsEmailInvalid(true)
        setEmailValidationMessage(
          '予期しないエラーが発生しました。運営者にご連絡ください。'
        )
        break
      }
    }
  }

  return (
    <>
      <form className="registerForm" onSubmit={handleSubmit}>
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
        <AgreementCheckbox
          onChange={(changeEvent) =>
            setIsAgreementChecked(changeEvent.target.checked)
          }
          isInvalid={isAgreementInvalid}
        ></AgreementCheckbox>
        <RegisterButton isLoading={isLoading}></RegisterButton>
      </form>
      <style jsx>
        {`
          .registerForm {
            width: 100%;
            max-width: 400px;
            margin-bottom: 20px;
          }
        `}
      </style>
      <style jsx-global="true">
        {`
        .registerForm button, .registerForm .validationInput input {
          width: 100%;
        }
        `}
      </style>
    </>
  )
}

export default RegisterForm
