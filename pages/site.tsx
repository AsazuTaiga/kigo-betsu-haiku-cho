import fs from 'fs'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import TermsToc from '../components/tocs/terms-toc'
import Markdwon from '../components/markdown/markdown'

type StaticProps = {
  privacy: string
  terms: string
}

const Site: NextPage<StaticProps> = (props) => {
  const { privacy, terms } = { ...props }
  return (
    <>
      <Head>
        <title>利用規約 - 季語別俳句帖</title>
      </Head>
      <div className="container">
        <main className="main">
          <img className="image" src="/top-logo.svg"></img>
          <TermsToc></TermsToc>
          <Markdwon source={terms}></Markdwon>
          <Markdwon source={privacy}></Markdwon>
        </main>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          min-height: 100vh;
          justify-content: center;
          padding: 20px;
        }
        .main {
          max-width: 1080px;
          display: flex;
          flex-direction: column;
        }
        .image {
          width: 280px;
          align-self: center;
          max-width: 90%;
          margin-bottom: 20px;
        }
      `}</style>
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
    },
  }
}

export default Site
