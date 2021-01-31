import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import LogOutIcon from '@material-ui/icons/ExitToAppOutlined'
import AlertIcon from '@material-ui/icons/ErrorOutline'
import BaseTooltip from './base/base-tooltip'
import { OnClick } from '../../types/events'
import colors from '../../colors.json'

type Props = {
  configHandler: OnClick
  logOutHandler: OnClick
  termsHandler: OnClick
  isShown: boolean
}

const MenuTooltip: React.VFC<Props> = (props) => {
  const { configHandler, logOutHandler, termsHandler, isShown } = {
    ...props,
  }
  return (
    <>
      <div className="wrapper">
        <BaseTooltip
          isShown={isShown}
          innerTooltipAttrs={[
            {
              text: '詳細設定',
              icon: <SettingsIcon htmlColor={colors.weakBlack}></SettingsIcon>,
              onClick: configHandler,
            },
            {
              text: 'ログアウト',
              icon: <LogOutIcon htmlColor={colors.danger}></LogOutIcon>,
              isDanger: true,
              onClick: logOutHandler,
            },
            {
              text: '利用規約',
              icon: <AlertIcon htmlColor={colors.weakBlack}></AlertIcon>,
              onClick: termsHandler,
            },
          ]}
        ></BaseTooltip>
      </div>
      <style>{`
      .wrapper {
        width: 220px;
      }`}</style>
    </>
  )
}

export default MenuTooltip
