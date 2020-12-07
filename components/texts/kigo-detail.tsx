import colors from '../../colors.json'

type Props = {
  kigo: Kigo
}

const KigoDetail: React.FC<Props> = (props) => {
  const { kigo } = { ...props }
  const seasonJa = {
    spring: '春',
    summer: '夏',
    fall: '秋',
    winter: '冬',
    newYear: '新年',
  }

  return (
    <>
      <div className="wrapper">
        <div className="kigo-main">
          <span className="season">{seasonJa[kigo.season]}</span>
          <ruby>
            <h1>{kigo.name}</h1>
            {kigo.yomigana || kigo.kyukana ? (
              <rt>
                <div className="ruby-wrap">
                  {kigo.yomigana && <span>{kigo.yomigana}</span>}
                  {kigo.yomigana && kigo.kyukana && <span>・</span>}
                  {kigo.kyukana && <span>{kigo.kyukana}</span>}
                </div>
              </rt>
            ) : null}
          </ruby>
        </div>
        {kigo.bodai && kigo.bodai.length ? (
          <div className="kigo-sub">
            <span className="bodai-title">傍題</span>
            <span className="bodai">{kigo.bodai.join('、')}</span>
          </div>
        ) : null}
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }
        .kigo-main {
          display: flex;
          align-items: center;
        }
        .season {
          min-width: 30px;
          height: 30px;
          font-size: 13px;
          border-radius: 15px;
          background-color: ${colors[kigo.season]};
          color: ${colors.weakBlack};
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
        }
        .ruby-wrap {
          display: flex;
          align-items: center;
          margin-left: 22px;
        }
        rt {
          font-size: 12px;
        }
        h1 {
          font-size: 36px;
          font-weight: bold;
          padding: 20px 20px 10px 20px;
          margin: 0px;
        }
        .kigo-sub {
          background-color: ${colors.silent};
          display: flex;
          align-items: center;
          border-radius: 15px;
          padding: 6px 10px;
          font-size: 14px;
        }
        .bodai-title {
          margin-right: 10px;
          font-weight: bold;
          width: 40px;
        }
      `}</style>
    </>
  )
}

export default KigoDetail
