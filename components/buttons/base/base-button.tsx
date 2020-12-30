import colors from '../../../colors.json'

type Props = {
  backgroundColor: string
  textColor: string
  textContent: string | JSX.Element
  onClick: OnClick
  isLoading?: boolean
  type: 'button' | 'submit' | 'reset'
}

const BaseButton: React.VFC<Props> = (props) => {
  const {
    backgroundColor,
    textColor,
    textContent,
    onClick,
    isLoading,
    type,
  } = {
    ...props,
  }
  return (
    <>
      <button className="commonButton" onClick={onClick} type={type}>
        {isLoading ? (
          <img src="/three-dots.svg" className="loading"></img>
        ) : (
          textContent
        )}
      </button>
      <style jsx>{`
        .commonButton {
          background-color: ${backgroundColor};
          color: ${textColor};
          height: 42px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          outline: none;
          font-size: 16px;
          transition: filter 0.2s ease;
          width: 100%;
        }
        commonButton:acitive {
          filter: brightness(1.1);
        }
        .commonButton:focus {
          box-shadow: 0 0 4px 2px ${colors.focus};
        }
        .loading {
          height: 30%;
        }
      `}</style>
    </>
  )
}

export default BaseButton
