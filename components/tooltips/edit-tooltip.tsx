import EditIcon from '@material-ui/icons/EditOutlined'
import CopyIcon from '@material-ui/icons/FileCopyOutlined'
import TwitterIcon from '@material-ui/icons/Twitter'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import BaseTooltip from './base/base-tooltip'
import colors from '../../colors.json'
import { OnClick } from '../../types/events'

type Props = {
  copyHandler: OnClick
  editHandler: OnClick
  tweetHandler: OnClick
  deleteHandler: OnClick
  visibility: 'visible' | 'hidden'
  positionX: number
  positionY: number
}

const EditTooltip: React.VFC<Props> = (props) => {
  const {
    copyHandler,
    editHandler,
    tweetHandler,
    deleteHandler,
    visibility,
    positionX,
    positionY,
  } = { ...props }
  return (
    <>
      <div className="wrapper">
        <BaseTooltip
          visibility={visibility}
          innerTooltipAttrs={[
            {
              text: '編集',
              icon: <EditIcon htmlColor={colors.weakBlack}></EditIcon>,
              onClick: editHandler,
            },
            {
              text: 'コピー',
              icon: <CopyIcon htmlColor={colors.weakBlack}></CopyIcon>,
              onClick: copyHandler,
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
      </div>
      <style jsx>
        {`
          .wrapper {
            position: fixed;
            z-index: 100;
            left: ${positionX}px;
            top: ${positionY}px;
          }
        `}
      </style>
    </>
  )
}

export default EditTooltip
