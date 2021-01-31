import { Fragment } from 'react'
import { Props as BaseTooltipItemAttr } from './base-tooltip-item'
import BaseTooltipItem from './base-tooltip-item'

type Props = {
  innerTooltipAttrs: Array<BaseTooltipItemAttr>
  isShown: boolean
}

const BaseTooltip: React.VFC<Props> = (props) => {
  const { innerTooltipAttrs, isShown } = { ...props }
  return (
    <Fragment>
      <div className="baseToolTip">
        <ul className="baseToolTipUL">
          {innerTooltipAttrs.map((attr, i) => (
            <BaseTooltipItem
              key={i}
              text={attr.text}
              icon={attr.icon}
              onClick={attr.onClick}
              isDanger={attr.isDanger}
            ></BaseTooltipItem>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .baseToolTip {
          background: white;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          border-radius: 4px;
          display: ${isShown ? 'block' : 'none'};
          animation: fade 0.3s ease-in-out;
        }
        .baseToolTipUL {
          margin: 0;
          padding: 10px 0px;
        }
        @keyframes fade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Fragment>
  )
}
export default BaseTooltip
