import AlertIcon from '@material-ui/icons/ErrorOutline'
import colors from '../../colors.json'

const AlertText: React.FC = (props) => {
  return (
    <>
      <div className="alertText">
        <AlertIcon htmlColor={colors.weakBlack}></AlertIcon>
        <div className="innerText">{props.children}</div>
      </div>
      <style jsx>{`
        .alertText {
          display: flex;
          margin: 20px 0px;
          padding: 10px;
          border-radius: 6px;
          color: ${colors.weakBlack};
          background: ${colors.silent};
          align-items: center;
        }
        .innerText {
          margin-left: 10px;
        }
      `}</style>
    </>
  )
}

export default AlertText
