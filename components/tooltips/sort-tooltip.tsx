import NewerIcon from '@material-ui/icons/ArrowDownward'
import OlderIcon from '@material-ui/icons/ArrowUpward'
import BaseTooltip from './base/base-tooltip'
import colors from '../../colors.json'

type Props = {
  newerHandler: OnClickLI
  olderHandler: OnClickLI
}

const SortTooltip: React.FC<Props> = (props) => {
  const { newerHandler, olderHandler } = {
    ...props,
  }
  return (
    <BaseTooltip
      innerTooltipAttrs={[
        {
          text: '新しい順',
          icon: <NewerIcon htmlColor={colors.weakBlack}></NewerIcon>,
          onClick: newerHandler,
        },
        {
          text: '古い順',
          icon: <OlderIcon htmlColor={colors.weakBlack}></OlderIcon>,
          onClick: olderHandler,
        },
      ]}
    ></BaseTooltip>
  )
}

export default SortTooltip
