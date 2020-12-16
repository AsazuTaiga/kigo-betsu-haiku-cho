import Link from 'next/link'
import colors from '../../colors.json'

type Props = {
  kigo: Kigo
}

const KigoLink: React.VFC<Props> = (props) => {
  const { kigo } = { ...props }
  return (
    <>
      <div className="linkWrap">
        <Link href={`/haiku/${encodeURIComponent(kigo.id)}`}>
          <button className={`kigoLink`}>
            <span className="linkText">{kigo.name}</span>
          </button>
        </Link>
      </div>
      <style jsx>{`
        .linkWrap {
          flex: 1 1 auto;
          margin: 8px 4px;
          animation: fade 0.8s ease;
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
          background: transparent;
          overflow: hidden;
        }
        .linkText {
          position: relative;
          display: inline-block;
          transition: transform 0.1s ease;
        }
        .kigoLink:before {
          position: absolute;
          left: 0;
          top: calc(100% - 2px);
          content: '';
          transition: top 0.2s ease-in-out;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            45deg,
            ${colors[kigo.season]} 0,
            ${colors[kigo.season]} 4px,
            ${colors[kigo.season] + '99'} 4px,
            ${colors[kigo.season] + '99'} 8px
          );
        }
        .kigoLink:hover:before {
          top: 0;
        }
        .kigoLink:hover .linkText {
          transform: scale(1.2);
        }
        .kigoLink:focus:before {
          top: 0;
        }
        .kigoLink:focus .linkText {
          transform: scale(1.2);
        }
        @keyframes fade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}

export default KigoLink
