import BaseButton from './base/base-button'
import Colors from '../../colors.json'

type Props = {
  onClick?: OnClick
}

const SaveButton: React.FC<Props> = (props) => {
  const { onClick } = { ...props }
  return (
    <BaseButton
      backgroundColor={Colors.primary}
      textColor="white"
      textContent="保存"
      onClick={onClick}
      type="submit"
    ></BaseButton>
  )
}
export default SaveButton
