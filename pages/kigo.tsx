import { NextPage } from 'next'
import { useState } from 'react'
import AppHeader from '../components/headers/app-header'
import BaseInput from '../components/inputs/base/base-input'
import KigoList from '../components/kigo-list/kigo-list'
import colors from '../colors.json'

const Kigo: NextPage = () => {
  const [filter, setFilter] = useState('')
  const [season, setSeason] = useState<
    'spring' | 'summer' | 'fall' | 'winter' | 'newYear'
  >('spring')
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
    const seasonString = changeEvent.target.value
    switch (seasonString) {
      case 'spring': {
        setSeason('spring')
        break
      }
      case 'summer': {
        setSeason('summer')
        break
      }
      case 'fall': {
        setSeason('fall')
        break
      }
      case 'winter': {
        setSeason('winter')
        break
      }
      case 'newYear': {
        setSeason('newYear')
        break
      }
      default: {
        break
      }
    }
    scrollTo({ top: 0 })
  }
  return (
    <>
      <div className="container">
        <AppHeader />
        <main>
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
        </main>
      </div>
      <style jsx global>{`
        .container {
          margin-top: 56px;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 800px;
        }
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
        }
        .scrollContent {
          margin-top: 160px;
        }
        .baseInput {
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
        }
        label input {
          display: none;
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
        }
        input:checked + div.tab {
          background: ${colors[season]};
          color: white;
        }
      `}</style>
    </>
  )
}

export default Kigo
