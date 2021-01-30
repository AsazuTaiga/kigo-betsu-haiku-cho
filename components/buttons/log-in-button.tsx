import BaseButton from './base/base-button'
import Colors from '../../colors.json'
import { OnClick } from '../../types/events'

type Props = {
  onClick?: OnClick
  isLoading?: boolean
}

const LogInButton: React.VFC<Props> = (props) => {
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
