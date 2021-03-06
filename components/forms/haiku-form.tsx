import CancelButton from '../buttons/cancel-button'
import SaveButton from '../buttons/save-button'
import HaikuAddTextarea from '../textareas/haiku-add-textarea'
import { OnClick, OnChangeTextArea } from '../../types/events'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

type Props = {
  onCancel: OnClick
  isShown: boolean
  isDisabled: boolean
  kid: string
}

const HaikuForm: React.VFC<Props> = (props) => {
  const { onCancel, isShown, isDisabled, kid } = { ...props }

  // state
  const [user, setUser] = useState<firebase.User>()

  // router
  const router = useRouter()

  // user info
  useEffect(() => {
    const userCredentialStr = sessionStorage.getItem('userCredential')
    if (userCredentialStr === null) {
      router.push('/log-in')
      return
    }
    const user: firebase.User = JSON.parse(userCredentialStr).user
    setUser(user)
  }, [])

  // state
  const [text, setText] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  // event handler
  const onChange: OnChangeTextArea = (changeEvent) => {
    setText(changeEvent.target.value)
  }
  const onSave: OnClick = () => {
    const haikus = text.split('\n').filter((haiku) => haiku)
    if (!haikus.length) {
      return
    }

    setIsSaving(true)
    Promise.all(
      haikus.map((haiku) =>
        firebase
          .database()
          .ref('users/' + user?.uid + '/haiku/' + kid)
          .push()
          .set({
            haiku: haiku,
            createdAt: new Date().toLocaleDateString(),
          })
      )
    ).then(() => {
      setIsSaving(false)
      setText('')
    })
  }

  return (
    <>
      <div className="haikuForm">
        <HaikuAddTextarea
          onChange={onChange}
          valueRef={text}
          isDisabled={isDisabled}
        ></HaikuAddTextarea>
        <div className="buttonGroup">
          <CancelButton onClick={onCancel}></CancelButton>
          <SaveButton onClick={onSave} isLoading={isSaving}></SaveButton>
        </div>
      </div>
      <style jsx>{`
        .haikuForm {
          display: ${isShown ? 'flex' : 'none'};
          flex-direction: column;
          width: 100%;
        }
        .buttonGroup {
          display: flex;
          flex-direction: row;
          margin-top: 10px;
        }
      `}</style>
      <style jsx global>{`
        .commonButton:first-child {
          margin-right: 6px;
        }
      `}</style>
    </>
  )
}

export default HaikuForm
