import BaseButton from './base/base-button'
import Colors from '../../colors.json'

type Props = {
  onClick?: OnClick
}

const CancelButton: React.FC<Props> = (props) => {
  const { onClick } = { ...props }
  return (
    <BaseButton
      backgroundColor={Colors.silent}
      textColor={Colors.weakBlack}
      textContent="キャンセル"
      onClick={onClick}
      type="button"
    ></BaseButton>
  )
}
export default CancelButton
