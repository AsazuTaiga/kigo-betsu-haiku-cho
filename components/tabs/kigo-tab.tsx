import { useState } from 'react'
import BaseInput from '../../components/inputs/base/base-input'
import KigoList from '../../components/kigo-list/kigo-list'
import colors from '../../colors.json'

const KigoTab: React.VFC = () => {
  const [filter, setFilter] = useState<string>('')
  const [season, setSeason] = useState<Season>('spring')
  let timeout
  const handleFilterChange: OnChange = (changeEvent) => {
    const filterValue = changeEvent.target.value
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      setFilter(filterValue)
      scrollTo({ top: 0 })
    }, 500)
  }
  const handleSeasonChange: OnChange = (changeEvent) => {
    setSeason(changeEvent.target.value as Season)
    scrollTo({ top: 0 })
  }
  return (
    <>
      <div className="fixedContent">
        <BaseInput
          placeholder="キーワードで絞り込み..."
          name="filter"
          type="text"
          onChange={handleFilterChange}
        ></BaseInput>
        <div className="tabWrapper">
          <label>
            <input
              type="radio"
              name="season"
              value="spring"
              onChange={handleSeasonChange}
              defaultChecked
            ></input>
            <div className="tab">春</div>
          </label>
          <label>
            <input
              type="radio"
              name="season"
              value="summer"
              onChange={handleSeasonChange}
            ></input>
            <div className="tab">夏</div>
          </label>
          <label>
            <input
              type="radio"
              name="season"
              value="fall"
              onChange={handleSeasonChange}
            ></input>
            <div className="tab">秋</div>
          </label>
          <label>
            <input
              type="radio"
              name="season"
              value="winter"
              onChange={handleSeasonChange}
            ></input>
            <div className="tab">冬</div>
          </label>
          <label>
            <input
              type="radio"
              name="season"
              value="newYear"
              onChange={handleSeasonChange}
            ></input>
            <div className="tab">新年</div>
          </label>
        </div>
      </div>
      <div className="scrollContent">
        <KigoList season={season} filter={filter} />
      </div>
      <style jsx global>
        {`
          .fixedContent {
            flex-wrap: wrap;
            width: 100%;
            height: 140px;
            max-width: 1080px;
            padding: 0 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            z-index: 2;
            background: white;
            flex-direction: column;
          }
          .scrollContent {
            margin-top: 160px;
          }
          .baseInput {
            width: 100%;
            flex: 1;
            max-width: 500px;
            margin-top: 30px;
          }
          .tabWrapper {
            display: flex;
            width: 100%;
            max-width: 800px;
            margin-top: 30px;
            background: white;
          }
          label {
            display: flex;
            flex: 1;
            justify-content: center;
            color: ${colors.weakBlack};
            cursor: pointer;
            transition: all 0.1s ease-in-out;
          }
          label:focus-within .tab {
            border: 2px solid ${colors[season]};
          }
          label input {
            width: 0;
            height: 0;
            margin: 0;
            padding: 0;
          }
          .tab {
            width: 100%;
            height: 36px;
            font-size: 18px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px 4px 0 0;
            border-bottom: 2px solid ${colors[season]};
          }
          input:checked + div.tab {
            color: ${colors[season]};
          }
        `}
      </style>
    </>
  )
}

export default KigoTab
