import { Haiku } from '../../types/haiku'
import HaikuEditTextarea from '../textareas/haiku-edit-textarea'
import HaikuListDateDivider from './haiku-list-date-divider'

type Props = {
  haikuDataList: Haiku[]
  onSumitHandler: (edittedHaiku: string, updateTarget: Haiku) => void
}

const HaikuList: React.VFC<Props> = (props) => {
  const { haikuDataList, onSumitHandler } = { ...props }

  // データの成型
  const dividedByDate: {
    [key: string]: Haiku[]
  } = {}
  haikuDataList.forEach((data) => {
    if (!dividedByDate[data.createdAt]) {
      dividedByDate[data.createdAt] = []
    }
    dividedByDate[data.createdAt].push(data)
  })

  return (
    <>
      <div className="haikuListWrapper">
        {Object.entries(dividedByDate).map((data) => (
          <div key={data[0]}>
            <HaikuListDateDivider date={data[0]}></HaikuListDateDivider>
            <ul className="haikuList">
              {data[1].map((haiku) => (
                <li key={haiku.id}>
                  <HaikuEditTextarea
                    data={haiku}
                    onSubmitHandler={onSumitHandler}
                  ></HaikuEditTextarea>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style jsx>{`
        .haikuListWrapper {
          padding-bottom: 150px;
        }
        .haikuList {
          margin: 0;
          padding: 0;
          list-style: none;
        }
      `}</style>
    </>
  )
}

export default HaikuList
