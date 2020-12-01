import Link from 'next/link'
import colors from '../../colors.json'

type Props = {
  kigo: Kigo
}

const KigoLink: React.FC<Props> = (props) => {
  const { kigo } = { ...props }
  return (
    <>
      <div className="linkWrap">
        <Link href={`/haiku/${encodeURIComponent(kigo.name)}`}>
          <button className={`kigoLink`}>
            <span className="linkText">{kigo.name}</span>
          </button>
        </Link>
      </div>
      <style jsx>{`
        .linkWrap {
          flex: 1 1 auto;
          margin: 8px 4px;
        }
        .kigoLink {
          position: relative;
          height: 42px;
          width: 100%;
          padding: 10px 16px;
          font-size: 18px;
          cursor: pointer;
          outline: none;
          color: ${colors.kigoLinkText};
          font-weight: bold;
          border: none;
          background: white;
          overflow: hidden;
          transition: color 0.3s ease-in-out;
        }
        .linkText {
          position: relative;
        }
        .kigoLink:before {
          position: absolute;
          left: 0;
          top: calc(100% - 2px);
          content: '';
          transition: top 0.2s ease-in-out;
          width: 100%;
          height: 100%;
          background: ${colors[kigo.season]};
        }
        .kigoLink:hover:before {
          top: 0;
        }
        .kigoLink:hover {
          color: ${colors.weakBlack};
        }
        .kigoLink:focus {
          box-shadow: 0 0 4px 2px ${colors.focus};
        }
      `}</style>
    </>
  )
}

export default KigoLink
