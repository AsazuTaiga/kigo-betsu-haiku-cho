import { useState } from 'react'
import Link from 'next/link'
import MenuTooltip from '../tooltips/menu-tooltip'
import colors from '../../colors.json'

const AppHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <header className="appHeader">
        <button className={`menuButton ${isMenuOpen ? 'isOpen' : ''}`} onClick={toggleIsMenuOpen}>
          <img src="menu.svg" alt="メニュー"></img>
        </button>
        <Link href='/kigo'>
          <img className="titleLogo" src="header.svg" alt="季語別俳句帖"></img>
        </Link>
        <div
          className={`modal ${isMenuOpen ? 'isOpen' : ''}`}
          onClick={toggleIsMenuOpen}
        >
          <MenuTooltip
            configHandler={() => window.alert('clicked!')}
            logOutHandler={() => window.alert('clicked!')}
            termsHandler={() => window.alert('clicked!')}
            privacyHandler={() => window.alert('clicked!')}
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
        }
        .menuButton {
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          position: absolute;
          top: 10px;
          left: 10px;
          outline: none;
          border-radius: 20px;
        }
        .menuButton.isOpen {
          background-color: ${colors.silent}
        }
        .menuButton:focus {
          background-color: ${colors.silent}
        }
        .modal {
          display: none;
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          padding: 50px 40% 0px 10px;
        }
        .modal.isOpen {
          display: block;
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
