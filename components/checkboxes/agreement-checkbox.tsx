import Link from 'next/link'

type Props = {
  onChange: OnChange
  isInvalid: boolean
}

const AgreementCheckbox: React.FC<Props> = (props) => {
  const { onChange, isInvalid } = { ...props }

  return (
    <>
      <div className="wrapper">
      <input id="checkBox" type="checkbox" onChange={ onChange } className={isInvalid ? 'isInvalid': ''}/>
      <label htmlFor="checkBox">
        <Link href="/site">利用規約</Link>および
        <Link href="/site#privacy">プライバシーポリシー</Link>に同意します。
      </label>
      </div>
      <span className="validationMessage">利用規約とプライバシーポリシーへの同意は必須です。</span>
      <style jsx>{`
        .wrapper {
          
        }
        #checkBox {

        }
        #checkBox.isInvalid {

        }
        .label {
        }
      `}</style>
    </>
  )
}

export default AgreementCheckbox
