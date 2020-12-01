import { useState } from 'react'
import KigoLink from '../links/kigo-link'
import colors from '../../colors.json'

// import KigoLink from "../links/kigo-link"

type Props = {
  season: 'spring' | 'summer' | 'fall' | 'winter' | 'newYear'
  filter?: string
}

const KigoList: React.FC<Props> = (props) => {
  const { season, filter } = { ...props }
  const [kigoArray, setKigoArray] = useState([])
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
            .map((kigo, i) => <KigoLink key={i} kigo={kigo}></KigoLink>)
        ) : (
          <span className="notFound">検索結果が見つかりませんでした。</span>
        )}
        <div className="lastItem"></div>
      </div>
      <style jsx>
        {`
          .wrap {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .lastItem {
            flex: 100;
          }
          .notFound {
            color: ${colors.weakBlack};
          }
        `}
      </style>
    </>
  )
}

export default KigoList
