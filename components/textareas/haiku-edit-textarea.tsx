import { useState, useRef, useEffect } from 'react'
import EditTooltip from '../tooltips/edit-tooltip'
import colors from '../../colors.json'

type Props = {
  haiku: string
}

const HaikuEditTextarea: React.VFC<Props> = (props) => {
  const { haiku: initialValue } = { ...props }
  const [edittedValue, setEdittedValue] = useState(initialValue)
  const [isMenuShown, setIsMenuShown] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleKeyDown: OnKeyDownTextArea = (keyDownEvent) => {
    if (keyDownEvent.key === 'Escape') {
      setIsDisabled(true)
      setEdittedValue(initialValue)
      return
    }
    if (keyDownEvent.key === 'Enter') {
      setIsDisabled(true)
      if (edittedValue === initialValue) {
        return
      }
      // 送信処理
      return
    }
  }

  const handleMenuButtonClick: OnClick = (mouseEvent) => {
    setX(mouseEvent.pageX)
    setY(mouseEvent.pageY)
    setIsMenuShown(true)
  }

  const handleCopy: OnClick = () => {
    navigator.clipboard.writeText(initialValue)
    setIsMenuShown(false)
  }

  const handleTweet: OnClick = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${initialValue}&hashtags=季語別俳句帖`
    )
    setIsMenuShown(false)
  }

  const handleEditStart: OnClick = () => {
    setIsDisabled(false)
    setIsMenuShown(false)
  }

  useEffect(() => {
    if (!isDisabled) {
      textAreaRef.current.focus()
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
    setEdittedValue(initialValue)
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
        <button className="menuButton" onClick={handleMenuButtonClick}>
          <img src="/more.svg"></img>
        </button>
      </div>
      {isMenuShown && (
        <div className="modal" onClick={handleModalClick}>
          <EditTooltip
            visibility={isMenuShown ? 'visible' : 'hidden'}
            copyHandler={handleCopy}
            tweetHandler={handleTweet}
            editHandler={handleEditStart}
            deleteHandler={handleDelete}
            positionX={x - 220}
            positionY={y}
          ></EditTooltip>
        </div>
      )}
      <style jsx>{`
        .haikuEditWrapper {
          display: flex;
          width: 100%;
          min-height: 80px;
          max-height: 80px;
          padding: 20px 0px;
        }
        .textArea {
          flex: 1;
          border: none;
          border-radius: 0;
          min-height: 40px;
          max-height: 40px;
          resize: none;
          padding: 6px;
          font-size: 18px;
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
        }
      `}</style>
    </>
  )
}

export default HaikuEditTextarea