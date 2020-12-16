import BaseButton from './base/base-button'
import Colors from '../../colors.json'

type Props = {
  onClick?: OnClick
  isLoading?: boolean
}

const RegisterButton: React.VFC<Props> = (props) => {
  const { onClick, isLoading } = { ...props }
  return (
    <BaseButton
      backgroundColor={Colors.theme}
      textColor="white"
      textContent="新規登録"
      onClick={onClick}
      type="submit"
      isLoading={isLoading}
    ></BaseButton>
  )
}
export default RegisterButton
