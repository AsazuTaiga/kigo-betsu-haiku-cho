import { Haiku } from '../../types/haiku'
import HaikuEditTextarea from '../textareas/haiku-edit-textarea'
import HaikuListDateDivider from './haiku-list-date-divider'
import AlertText from '../texts/alert-text'

type Props = {
  haikuDataList: Haiku[]
  onSumitHandler: (edittedHaiku: string, updateTarget: Haiku) => void
  onDeleteHandler: (deleteTarget: Haiku) => void
}

const HaikuList: React.VFC<Props> = (props) => {
  const { haikuDataList, onSumitHandler, onDeleteHandler } = { ...props }

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
        {haikuDataList.length ? (
          Object.entries(dividedByDate).map((data) => (
            <div key={data[0]}>
              <HaikuListDateDivider date={data[0]}></HaikuListDateDivider>
              <ul className="haikuList">
                {data[1].map((haiku) => (
                  <li key={haiku.id}>
                    <HaikuEditTextarea
                      data={haiku}
                      onSubmitHandler={onSumitHandler}
                      onDeleteHandler={onDeleteHandler}
                    ></HaikuEditTextarea>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <AlertText>
            まだ俳句が登録されていないようです。「この季語で俳句を書く」を押してみましょう。
          </AlertText>
        )}
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
