import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import LogOutIcon from '@material-ui/icons/ExitToAppOutlined'
import AlertIcon from '@material-ui/icons/ErrorOutline'
import BaseTooltip from './base/base-tooltip'
import colors from '../../colors.json'

type Props = {
  configHandler: OnClick
  logOutHandler: OnClick
  termsHandler: OnClick
  privacyHandler: OnClick
}

const MenuTooltip: React.FC<Props> = (props) => {
  const { configHandler, logOutHandler, termsHandler, privacyHandler } = {
    ...props,
  }
  return (
    <>
      <div className="wrapper">
        <BaseTooltip
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
            {
              text: 'プライバシーポリシー',
              icon: <AlertIcon htmlColor={colors.weakBlack}></AlertIcon>,
              onClick: privacyHandler,
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
