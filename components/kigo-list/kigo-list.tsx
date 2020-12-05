import { useEffect, useState } from 'react'
import KigoLink from '../links/kigo-link'
import colors from '../../colors.json'

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
  import(`../../kigo-resource/${season}.json`).then((json) =>
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
            border-radius: 40px;
            background: white;
            border: 1px solid ${colors.theme};
            color: ${colors.theme};
            outline: none;
            font-size: 18px;
            font-weigth: bold;
            margin-top: 16px;
            margin-bottom: 40px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
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
