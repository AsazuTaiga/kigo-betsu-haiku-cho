import AddIcon from '@material-ui/icons/Add'
import colors from '../../colors.json'

type Props = {
  onClick: OnClick
  visibility: 'visible' | 'hidden'
  isDisabled: boolean
}

const WriteHaikuButton: React.FC<Props> = (props) => {
  const { onClick, visibility, isDisabled } = { ...props }
  return (
    <>
      <button
        className="writeHaikuButton"
        onClick={onClick}
        disabled={isDisabled}
      >
        <AddIcon />
        この季語で俳句を書く
      </button>
      <style jsx>{`
        .writeHaikuButton {
          visibility: ${visibility};
          border: none;
          color: ${colors.theme};
          background: white;
          box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.25);
          font-size: 18px;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 46px;
          cursor: pointer;
          outline: none;
        }
        .writeHaikuButton:acitve {
          background: ${colors.weakTheme};
        }
        .writeHaikuButton:focus {
          background: ${colors.weakTheme};
        }
        .writeHaikuButton:disabled {
          background: ${colors.silent};
          opacity: 0.6;
        }
      `}</style>
    </>
  )
}

export default WriteHaikuButton
