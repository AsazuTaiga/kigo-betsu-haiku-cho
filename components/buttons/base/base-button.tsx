import colors from '../../../colors.json'

type Props = {
  backgroundColor: string
  textColor: string
  textContent: string | JSX.Element
  onClick: OnClick
  type: 'button' | 'submit' | 'reset'
}

const BaseButton: React.FC<Props> = (props) => {
  const { backgroundColor, textColor, textContent, onClick } = {
    ...props,
  }
  return (
    <>
      <button className="commonButton" onClick={onClick}>
        {textContent}
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
        }
        .commonButton:hover {
          filter: brightness(1.1);
        }
        .commonButton:focus {
          box-shadow: 0 0 4px 2px ${colors.focus};
        }
      `}</style>
    </>
  )
}

export default BaseButton
