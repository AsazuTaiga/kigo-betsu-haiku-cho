import BaseButton from './base/base-button'
import Colors from '../../colors.json'

type Props = {
  onClick?: OnClick
  isLoading?: boolean
}

const SaveButton: React.FC<Props> = (props) => {
  const { onClick, isLoading } = { ...props }
  return (
    <BaseButton
      backgroundColor={Colors.primary}
      textColor="white"
      textContent="保存"
      onClick={onClick}
      type="submit"
      isLoading={isLoading}
    ></BaseButton>
  )
}
export default SaveButton
