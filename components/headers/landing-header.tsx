import router from 'next/router'
import colors from '../../colors.json'

const LandingHeder: React.VFC = () => (
  <>
    <header>
      <button className="logIn" onClick={() => router.push('/log-in')}>
        ログイン
      </button>
      <button className="register" onClick={() => router.push('/register')}>
        新規登録
      </button>
    </header>
    <style jsx>{`
      header {
        background: ${colors.theme};
        width: 100%;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
      }
      button {
        color: white;
        border-radius: 4px;
        font-size: 14px;
        height: 30px;
        border-radius: 4px;
        background: transparent;
        outline: none;
        margin-right: 10px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
      }
      button:focus {
        border-color: ${colors.primary};
        color: ${colors.primary};
        background: rgba(0, 0, 0, 0.6);
      }
      button:active {
        border-color: ${colors.primary};
        color: ${colors.primary};
      }
      .logIn {
        border: none;
      }
      .register {
        border: 1px white solid;
      }
    `}</style>
  </>
)

export default LandingHeder
