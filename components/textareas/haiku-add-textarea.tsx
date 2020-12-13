import colors from '../../colors.json'

type Props = {
  onChange: OnChangeTextarea
  visibility: 'visible' | 'hidden'
  isDisabled: boolean
}

const HaikuAddTextarea: React.FC<Props> = (props) => {
  const { onChange, visibility, isDisabled } = { ...props }
  const placeholder =
    '改行して複数の俳句を登録できます。\n\n※多行書きを有効化する場合は設定から変更してください。'
  return (
    <>
      <textarea
        className="haikuAdd"
        onChange={onChange}
        disabled={isDisabled}
        placeholder={placeholder}
      />
      <style jsx>
        {`
          .haikuAdd {
            display: flex;
            height: 160px;
            resize: none;
            font-size: 16px;
            border: 1px solid ${colors.silent};
            padding: 10px;
            border-radius: 4px;
            visibility: ${visibility};
            outline: none;
            animation: openClose 0.2s ease-in-out;
          }
          .haikuAdd::placeholder {
            font-size: 12px;
          }
          .haikuAdd:focus {
            border: 1px solid ${colors.theme};
          }
          @keyframe openClose {
            0%: {
              height: 0px;
            }
            100%: {
              height: 160px;
            }
          }
        `}
      </style>
    </>
  )
}

export default HaikuAddTextarea
