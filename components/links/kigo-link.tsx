import Link from 'next/link'
import colors from '../../colors.json'

type Props = {
  kigo: Kigo
}

const KigoLink: React.FC<Props> = (props) => {
  const { kigo } = { ...props }
  return (
    <>
      <Link href={`/haiku/${encodeURIComponent(kigo.name)}`}>
        <button className={`kigo-link ${kigo.season}`}>{kigo.name}</button>
      </Link>
      <style jsx>{`
        .kigo-link {
          height: 42px;
          font-size: 18px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: filter 0.2s ease;
          outline: none;
        }
        .kigo-link:hover {
          filter: brightness(1.05);
        }
        .kigo-link:focus {
          box-shadow: 0 0 4px 2px ${colors.focus};
        }
        .spring {
          background-color: ${colors.spring};
        }
        .summer {
          background-color: ${colors.summer};
        }
        .fall {
          background-color: ${colors.fall};
        }
        .winter {
          background-color: ${colors.winter};
        }
        .newYear {
          background-color: ${colors.newYear};
        }
      `}</style>
    </>
  )
}

export default KigoLink
