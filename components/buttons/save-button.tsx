import BaseButton from './base/base-button'
import Colors from '../../colors.json'
import { OnClick } from '../../types/events'

type Props = {
  onClick?: OnClick
  isLoading?: boolean
}

const SaveButton: React.VFC<Props> = (props) => {
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
