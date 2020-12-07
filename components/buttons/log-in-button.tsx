import BaseButton from './base/base-button'
import Colors from '../../colors.json'

type Props = {
  onClick?: OnClick
  isLoading?: boolean
}

const LogInButton: React.FC<Props> = (props) => {
  const { onClick, isLoading } = { ...props }
  return (
    <BaseButton
      backgroundColor={Colors.theme}
      textColor="white"
      textContent="ログイン"
      onClick={onClick}
      type="submit"
      isLoading={isLoading}
    ></BaseButton>
  )
}
export default LogInButton
