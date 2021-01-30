import BaseButton from './base/base-button'
import Colors from '../../colors.json'
import { OnClick } from '../../types/events'

type Props = {
  onClick?: OnClick
  isLoading?: boolean
}

const CancelButton: React.FC<Props> = (props) => {
  const { onClick, isLoading } = { ...props }
  return (
    <BaseButton
      backgroundColor={Colors.silent}
      textColor={Colors.weakBlack}
      textContent="キャンセル"
      onClick={onClick}
      type="button"
      isLoading={isLoading}
    ></BaseButton>
  )
}
export default CancelButton
