import Colors from '../../colors.json'

type Props = {
  date: string
}

const HaikuListDateDivider: React.FC<Props> = (props) => {
  const { date } = { ...props }

  return (
    <>
      <div className="date">{date}</div>
      <style jsx>{`
        .date {
          font-size: 14px;
          font-weight: bold;
          color: ${Colors.weakBlack};
          margin: 20px 0px;
        }
      `}</style>
    </>
  )
}

export default HaikuListDateDivider
