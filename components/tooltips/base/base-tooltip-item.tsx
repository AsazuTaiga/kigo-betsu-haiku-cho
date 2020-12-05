import { Fragment } from 'react'
import colors from '../../../colors.json'

export type Props = {
  text: string
  icon: JSX.Element // @material-ui/core/Icon Components
  onClick: OnClick
  isDanger?: boolean
}

const BaseTooltipItem: React.FC<Props> = (props) => {
  const { text, icon, isDanger, onClick } = { ...props }
  const isDangerClassName = isDanger ? 'isDanger' : ''
  return (
    <Fragment>
      <li className={`baseToolTipItem ${isDangerClassName}`}>
        <button className="button" onClick={onClick}>
          <span className="icon">{icon}</span>
          {text}
        </button>
      </li>
      <style jsx>
        {`
          .baseToolTipItem {
            list-style: none;
            display: flex;
            cursor: pointer;
            font-size: 16px;
            color: ${colors.weakBlack};
          }
          .button {
            padding: 4px 10px 4px 10px;
            width: 100%;
            background: inherit;
            font: inherit;
            color: inherit;
            outline: inherit;
            border: none;
            cursor: inherit;
            display: inherit;
            align-items: center;
          }
          .button:active {
            background-color: ${colors.silent};
          }
          .button:focus {
            outline: none;
            background-color: ${colors.silent};
          }
          .icon {
            margin-right: 10px;
            display: inherit;
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
