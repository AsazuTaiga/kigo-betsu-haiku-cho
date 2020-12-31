import colors from '../../colors.json'

type Props = {
  tocList: Toc[]
}

type Toc = {
  title: string
  id: string
}

const BaseToc: React.VFC<Props> = (props) => {
  const { tocList } = { ...props }
  return (
    <>
      <ul className="tocList">
        {tocList.map((toc, index) => (
          <li key={index}>
            <a href={`#${toc.id}`}>{toc.title}</a>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .tocList {
            display: flex;
            flex-direction: column;
            font-size: 18px;
            position: relative;
            padding-left: 30px;
          }
          .tocList::before {
            content: '';
            width: 0px;
            height: 100%;
            border: ${colors.silent} 1px solid;
            position: absolute;
            top: 0;
            left: 15px;
          }
          .tocList li {
            list-style: none;
            position: relative;
            height: 28px;
            display: block;
          }
          .tocList li::before {
            content: '';
            width: 12px;
            height: 12px;
            border-radius: 12px;
            background: ${colors.silent};
            display: block;
            position: absolute;
            top: 8px;
            left: -20px;
          }
          .tocList li a {
            color: ${colors.weakBlack};
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default BaseToc
