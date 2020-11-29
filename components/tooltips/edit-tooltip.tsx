import EditIcon from '@material-ui/icons/EditOutlined'
import CopyIcon from '@material-ui/icons/FileCopyOutlined'
import TwitterIcon from '@material-ui/icons/Twitter'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import BaseTooltip from './base/base-tooltip'
import colors from '../../colors.json'

type Props = {
  copyHandler: OnClick
  editHandler: OnClick
  tweetHandler: OnClick
  deleteHandler: OnClick
}

const EditTooltip: React.FC<Props> = (props) => {
  const { copyHandler, editHandler, tweetHandler, deleteHandler } = { ...props }
  return (
    <BaseTooltip
      innerTooltipAttrs={[
        {
          text: '編集',
          icon: <EditIcon htmlColor={colors.weakBlack}></EditIcon>,
          onClick: copyHandler,
        },
        {
          text: 'コピー',
          icon: <CopyIcon htmlColor={colors.weakBlack}></CopyIcon>,
          onClick: editHandler,
        },
        {
          text: 'ツイート',
          icon: <TwitterIcon htmlColor={colors.weakBlack}></TwitterIcon>,
          onClick: tweetHandler,
        },
        {
          text: '削除',
          icon: <DeleteIcon htmlColor={colors.danger}></DeleteIcon>,
          isDanger: true,
          onClick: deleteHandler,
        },
      ]}
    ></BaseTooltip>
  )
}

export default EditTooltip
