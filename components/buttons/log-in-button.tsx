import BaseButton from './base/base-button'
import Colors from '../../colors.json'

type Props = {
  onClick?: OnClick
}

const LogInButton: React.FC<Props> = (props) => {
  const { onClick } = { ...props }
  return (
    <BaseButton
      backgroundColor={Colors.theme}
      textColor="white"
      textContent="ログイン"
      onClick={onClick}
      type="submit"
    ></BaseButton>
  )
}
export default LogInButton
