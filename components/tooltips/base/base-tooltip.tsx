import { Fragment } from 'react'
import { Props as BaseTooltipItemAttr } from './base-tooltip-item'
import BaseTooltipItem from './base-tooltip-item'

type Props = {
  innerTooltipAttrs: Array<BaseTooltipItemAttr>
}

const BaseTooltip: React.FC<Props> = (props) => {
  const { innerTooltipAttrs } = { ...props }
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
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          border-radius: 4px;
        }
        .baseToolTipUL {
          margin: 0;
          padding: 10px 0px;
        }
      `}</style>
    </Fragment>
  )
}
export default BaseTooltip
