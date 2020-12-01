import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import MenuTooltip from '../tooltips/menu-tooltip'
import colors from '../../colors.json'

const AppHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <header className="appHeader">
        <button
          className={`menuButton ${isMenuOpen ? 'isOpen' : ''}`}
          onClick={toggleIsMenuOpen}
          tabIndex={1}
        >
          <img src="menu.svg" alt="メニュー"></img>
        </button>
        <Link href="/kigo">
          <img className="titleLogo" src="header.svg" alt="季語別俳句帖"></img>
        </Link>
        <div
          className="modal"
          onClick={toggleIsMenuOpen}
          style={{ display: isMenuOpen ? 'block' : 'none' }}
        >
          <MenuTooltip
            configHandler={() => router.push('/config')}
            logOutHandler={() => router.push('/config#log-out')}
            termsHandler={() => router.push('/site')}
            privacyHandler={() => router.push('/site#privacy')}
          ></MenuTooltip>
        </div>
      </header>
      <style jsx>{`
        .appHeader {
          width: 100%;
          height: 56px;
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          border-bottom: 2px solid ${colors.weakTheme};
        }
        .menuButton {
          width: 36px;
          height: 36px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          position: fixed;
          z-index: 10;
          top: 10px;
          left: 10px;
          outline: none;
          border-radius: 20px;
          transition: background 0.1s ease;
        }
        .menuButton.isOpen {
          background-color: ${colors.silent};
        }
        .modal {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          padding: 50px 40% 0px 10px;
        }
        .titleLogo {
          height: 40%;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default AppHeader
