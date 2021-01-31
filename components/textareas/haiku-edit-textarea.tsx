import { useState, useRef, useEffect } from 'react'
import EditTooltip from '../tooltips/edit-tooltip'
import colors from '../../colors.json'
import { Haiku } from '../../types/haiku'
import {
  OnClick,
  OnClickDiv,
  OnBlurTextArea,
  OnKeyDownTextArea,
} from '../../types/events'
import Colors from '../../colors.json'

type Props = {
  data: Haiku
  onSubmitHandler: (edittedHaiku: string, updateTarget: Haiku) => void
}

const HaikuEditTextarea: React.VFC<Props> = (props) => {
  const { data: initialValue, onSubmitHandler } = { ...props }

  const [edittedValue, setEdittedValue] = useState(initialValue.haiku)
  const [isMenuShown, setIsMenuShown] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleKeyDown: OnKeyDownTextArea = (keyDownEvent) => {
    if (keyDownEvent.key === 'Escape') {
      setIsDisabled(true)
      setEdittedValue(initialValue.haiku)
      return
    }
    // keyCodeはDeprecatedだが、IME確定時のEnterを弾きたいので利用する
    if (keyDownEvent.keyCode === 13) {
      setIsDisabled(true)
      if (edittedValue === initialValue.haiku) {
        return
      }
      onSubmitHandler(edittedValue, initialValue)
      return
    }
  }

  const handleMenuButtonClick: OnClick = () => {
    setIsMenuShown(true)
  }

  const handleCopy: OnClick = () => {
    navigator.clipboard.writeText(edittedValue)
    setIsMenuShown(false)
  }

  const handleTweet: OnClick = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${initialValue.haiku}&hashtags=季語別俳句帖`
    )
    setIsMenuShown(false)
  }

  const handleEditStart: OnClick = () => {
    setIsDisabled(false)
    setIsMenuShown(false)
  }

  useEffect(() => {
    if (!isDisabled) {
      textAreaRef.current?.focus()
    }
  }, [isDisabled])

  const handleDelete: OnClick = () => {
    //
  }

  const handleModalClick: OnClickDiv = () => {
    setIsMenuShown(false)
  }

  const handleBlur: OnBlurTextArea = () => {
    setIsDisabled(true)
    setEdittedValue(initialValue.haiku)
  }

  return (
    <>
      <div className="haikuEditWrapper">
        <div className="textAreaWrapper">
          <textarea
            className="textArea"
            value={edittedValue}
            disabled={isDisabled}
            onChange={(changeEvent) =>
              setEdittedValue(changeEvent.target.value)
            }
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            ref={textAreaRef}
          ></textarea>
          <span className="textAreaBottom"></span>
        </div>
        <div className="menuButtonWrapper">
          <button className="menuButton" onClick={handleMenuButtonClick}>
            <img src="/more.svg"></img>
          </button>
          <EditTooltip
            isShown={isMenuShown}
            copyHandler={handleCopy}
            tweetHandler={handleTweet}
            editHandler={handleEditStart}
            deleteHandler={handleDelete}
          ></EditTooltip>
          {isMenuShown && (
            <div className="modal" onClick={handleModalClick}></div>
          )}
        </div>
      </div>
      <style jsx>{`
        .haikuEditWrapper {
          display: flex;
          width: 100%;
          min-height: 50px;
          max-height: 50px;
        }
        .textArea {
          flex: 1;
          border: none;
          border-radius: 0;
          min-height: 40px;
          max-height: 40px;
          resize: none;
          padding: 6px;
          font-size: 16px;
        }
        .textArea:disabled {
          background-color: transparent;
        }
        .textArea:focus {
          outline: none;
        }
        .textAreaWrapper {
          display: flex;
          flex: 1;
          position: relative;
          height: 40px;
        }
        .textAreaBottom {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background-color: ${colors.primary};
          transition: width 0.1s ease-in;
        }
        .textAreaWrapper:focus-within > .textAreaBottom {
          width: 100%;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 50;
        }
        .menuButtonWrapper {
          position: relative;
        }
        .menuButton {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          border: none;
          background: transparent;
          cursor: pointer;
        }
        .menuButton:focus,
        .menuButton:hover {
          outline: none;
          background: ${Colors.silent};
        }
      `}</style>
    </>
  )
}

export default HaikuEditTextarea
