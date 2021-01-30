import AddIcon from '@material-ui/icons/Add'
import colors from '../../colors.json'
import { OnClick } from '../../types/events'

type Props = {
  onClick: OnClick
  isShown: boolean
  isDisabled: boolean
}

const WriteHaikuButton: React.FC<Props> = (props) => {
  const { onClick, isShown, isDisabled } = { ...props }
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
          display: ${isShown ? 'flex' : 'none'};
          border: none;
          color: ${colors.theme};
          background: white;
          box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.25);
          font-size: 18px;
          font-weight: bold;
          justify-content: center;
          align-items: center;
          height: 40px;
          cursor: pointer;
          outline: none;
          border-radius: 4px;
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
