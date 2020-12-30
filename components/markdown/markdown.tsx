import ReactMarkdown from 'react-markdown'
import React from 'react'

const HeadingRenderer = (props: any) => {
  const id = props.node.children[0].value
  return React.createElement('h' + props.level, { id: id }, props.children)
}

type Props = {
  source: string
}
const Markdwon: React.VFC<Props> = (props) => (
  <ReactMarkdown renderers={{ heading: HeadingRenderer }} skipHtml={true}>
    {props.source}
  </ReactMarkdown>
)

export default Markdwon
