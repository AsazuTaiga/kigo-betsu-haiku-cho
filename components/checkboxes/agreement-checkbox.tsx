import Link from 'next/link'
import { OnChange } from '../../types/events'
import colors from '../../colors.json'

type Props = {
  onChange: OnChange
  isInvalid: boolean
}

const AgreementCheckbox: React.VFC<Props> = (props) => {
  const { onChange, isInvalid } = { ...props }

  return (
    <>
      <div className="wrapper">
        <input id="checkBox" type="checkbox" onChange={onChange} />
        <label id="checkBoxLabel" htmlFor="checkBox">
          <Link href="/site">利用規約およびプライバシーポリシー</Link>
          に同意します。
        </label>
      </div>
      <div className={`validationMessage ${isInvalid ? 'isInvalid' : ''}`}>
        利用規約とプライバシーポリシーへの同意は必須です。
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
        }
        #checkBoxLabel {
          font-size: 14px;
          margin-left: 10px;
        }
        .validationMessage {
          font-size: 10px;
          color: ${colors.danger};
          height: 30px;
          visibility: hidden;
        }
        .validationMessage.isInvalid {
          visibility: visible;
        }
      `}</style>
      <style jsx global>{`
        a {
          text-decoration: none;
          color: ${colors.primary};
        }
      `}</style>
    </>
  )
}

export default AgreementCheckbox
