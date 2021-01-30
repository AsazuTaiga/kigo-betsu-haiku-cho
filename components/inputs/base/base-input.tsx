import colors from '../../../colors.json'
import { OnChange } from '../../../types/events'

type Props = {
  isInvalid?: boolean
  placeholder: string
  name: string
  type: 'password' | 'email' | 'text'
  onChange?: OnChange
}

const BaseInput: React.VFC<Props> = (props) => {
  const { isInvalid, placeholder, name, type, onChange } = { ...props }
  return (
    <>
      <input
        className={`baseInput ${isInvalid ? 'invalid' : ''}`}
        placeholder={placeholder}
        title={placeholder} // labelの代替
        name={name}
        type={type}
        onChange={onChange}
      ></input>
      <style jsx>{`
        .baseInput {
          border: 1px solid ${colors.silent};
          padding: 0 10px;
          border-radius: 4px;
          font-size: 16px;
          height: 48px;
        }
        .baseInput.invalid {
          border-color: ${colors.danger} !important;
        }
        .baseInput:focus {
          outline: none;
          border-color: ${colors.theme};
        }
        .baseInput::placeholder {
          font-size: 12px;
        }
      `}</style>
    </>
  )
}

export default BaseInput
