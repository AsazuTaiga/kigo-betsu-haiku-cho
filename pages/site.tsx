import fs from 'fs'
import { NextPage, GetStaticProps } from 'next'
import Router from 'next/router'
import TermsToc from '../components/tocs/terms-toc'
import Markdwon from '../components/markdown/markdown'
import { useEffect, useRef } from 'react'

type StaticProps = {
  privacy: string
  terms: string
}

const Site: NextPage<StaticProps> = (props) => {
  const { privacy, terms } = { ...props }
  return (
    <>
      <main>
        <TermsToc></TermsToc>
        <Markdwon source={terms}></Markdwon>
        <Markdwon source={privacy}></Markdwon>
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
    },
  }
}

export default Site
