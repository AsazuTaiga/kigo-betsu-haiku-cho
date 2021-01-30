import { useEffect, useState } from 'react'
import KigoLink from '../links/kigo-link'
import colors from '../../colors.json'
import { Season, Kigo } from '../../types/kigo'

// import KigoLink from "../links/kigo-link"

type Props = {
  season: Season
  filter?: string
}

const KigoList: React.FC<Props> = (props) => {
  const { season, filter } = { ...props }
  const [kigoArray, setKigoArray] = useState([])
  const [marker, setMarker] = useState(60)
  useEffect(() => {
    setMarker(60)
  }, [season])
  import(`../../kigo-resource/${season}`).then((json) =>
    setKigoArray(json.default)
  )
  const isMatchFilterString = (kigo: Kigo) => {
    return (
      kigo.name.includes(filter) ||
      kigo.yomigana.includes(filter) ||
      kigo.kyukana.includes(filter) ||
      kigo.bodai.includes(filter) ||
      !filter
    )
  }
  return (
    <>
      <div className="wrap">
        {kigoArray.filter(isMatchFilterString).length ? (
          kigoArray
            .filter(isMatchFilterString)
            .slice(0, marker)
            .map((kigo, i) => <KigoLink key={i} kigo={kigo}></KigoLink>)
        ) : (
          <span className="notFound">検索結果が見つかりませんでした。</span>
        )}
        {kigoArray.filter(isMatchFilterString).length > marker ? (
          <button className="showMore" onClick={() => setMarker(marker + 100)}>
            つづきを表示する
          </button>
        ) : null}
      </div>
      <style jsx>
        {`
          .wrap {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 40px;
          }
          .notFound {
            color: ${colors.weakBlack};
          }
          .showMore {
            width: 100%;
            height: 40px;
            border-radius: 4px;
            background: white;
            border: none;
            color: ${colors.theme};
            outline: none;
            font-size: 18px;
            font-weight: bold;
            margin-top: 16px;
            margin-bottom: 40px;
            cursor: pointer;
            box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.25);
          }
          .showMore:focus {
            background: ${colors.weakTheme};
          }
          .showMore:active {
            background: ${colors.weakTheme};
          }
        `}
      </style>
    </>
  )
}

export default KigoList
