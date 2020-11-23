import BaseButton from './base/base-button'
import Colors from '../../colors.json'

type Props = {
  onClick?: OnClick
}

const RegisterButton: React.FC<Props> = (props) => {
  const { onClick } = { ...props }
  return (
    <BaseButton
      backgroundColor={Colors.theme}
      textColor="white"
      textContent="新規登録"
      onClick={onClick}
      type="submit"
    ></BaseButton>
  )
}
export default RegisterButton
