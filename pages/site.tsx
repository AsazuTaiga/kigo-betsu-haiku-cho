import fs from 'fs'
import { NextPage, GetStaticProps } from 'next'
// import TocList from '../components/tocs/toc-list'
import Markdwon from 'react-markdown'

type StaticProps = {
  privacy: string
  terms: string
}

const Site: NextPage<StaticProps> = (props) => {
  const { privacy, terms } = { ...props }
  return (
    <>
      <main>
        <Markdwon skipHtml={true}>{terms}</Markdwon>
        <Markdwon skipHtml={true}>{privacy}</Markdwon>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const privacy = fs.readFileSync(process.cwd() + '/docs/privacy.md', 'utf8')
  const terms = fs.readFileSync(process.cwd() + '/docs/terms.md', 'utf8')
  return {
    props: {
      privacy: privacy,
      terms: terms,
    }
  }
}

export default Site
