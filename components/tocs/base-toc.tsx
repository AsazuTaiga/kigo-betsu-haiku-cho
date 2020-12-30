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
          .tocList li {
          }
        `}
      </style>
    </>
  )
}

export default BaseToc
