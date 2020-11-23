import { Fragment } from 'react'
import colors from '../../../colors.json'

export type Props = {
  text: string
  icon: JSX.Element // @material-ui/core/Icon Components
  isDanger?: boolean
  onClick: OnClickLI
}

const BaseTooltipItem: React.FC<Props> = (props) => {
  const { text, icon, isDanger, onClick } = { ...props }
  const isDangerClassName = isDanger ? 'isDanger' : ''
  return (
    <Fragment>
      <li
        className={`baseToolTipItem ${isDangerClassName}`}
        onClick={onClick}
        tabIndex={0}
      >
        <span className="icon">{icon}</span>
        {text}
      </li>
      <style jsx>
        {`
          .baseToolTipItem {
            list-style: none;
            display: flex;
            cursor: pointer;
            padding: 6px 10px 0px 10px;
            font-size: 16px;
            color: ${colors.weakBlack};
          }
          .baseToolTipItem:hover {
            background-color: ${colors.silent};
          }
          .baseToolTipItem:focus {
            outline: none;
            background-color: ${colors.silent};
          }
          .icon {
            margin-right: 10px;
          }
          .isDanger {
            color: ${colors.danger};
          }
        `}
      </style>
    </Fragment>
  )
}

export default BaseTooltipItem
