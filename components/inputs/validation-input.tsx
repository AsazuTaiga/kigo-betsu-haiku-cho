import BaseInput from './base/base-input'
import colors from '../../colors.json'
import { OnChange } from '../../types/events'

type Props = {
  isInvalid?: boolean
  validationMessage: string
  placeholder: string
  name: string
  type: 'password' | 'email'
  onChange?: OnChange
}

const ValidationInput: React.FC<Props> = (prop) => {
  const { isInvalid, validationMessage, placeholder, name, type, onChange } = {
    ...prop,
  }
  return (
    <>
      <div className={`validationInput ${isInvalid ? 'invalid' : ''}`}>
        <BaseInput
          placeholder={placeholder}
          name={name}
          type={type}
          isInvalid={isInvalid}
          onChange={onChange}
        ></BaseInput>
        <span className="validationMessage">{validationMessage}</span>
      </div>
      <style jsx>{`
        .validationInput {
          height: 64px;
        }
        .validationMessage {
          display: none;
          color: ${colors.danger};
          font-size: 10px;
          position: absolute;
        }
        .invalid .validationMessage {
          display: block;
        }
      `}</style>
    </>
  )
}

export default ValidationInput
