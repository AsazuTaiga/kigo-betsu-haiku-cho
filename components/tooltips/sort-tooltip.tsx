import NewerIcon from '@material-ui/icons/ArrowDownward'
import OlderIcon from '@material-ui/icons/ArrowUpward'
import BaseTooltip from './base/base-tooltip'
import { OnClick } from '../../types/events'
import colors from '../../colors.json'

type Props = {
  newerHandler: OnClick
  olderHandler: OnClick
  visibility: 'visible' | 'hidden'
}

const SortTooltip: React.FC<Props> = (props) => {
  const { newerHandler, olderHandler, visibility } = {
    ...props,
  }
  return (
    <BaseTooltip
      visibility={visibility}
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
