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
            padding-left: 40px;
          }
          .tocList::before {
            content: '';
            width: 2px;
            height: calc(100% - 40px);
            margin-top: 20px;
            background: ${colors.silent};
            position: absolute;
            top: 0;
            left: 15px;
          }
          .tocList li {
            list-style: none;
            position: relative;
            height: 28px;
            display: flex;
            align-items: center;
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
            left: -30px;
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
