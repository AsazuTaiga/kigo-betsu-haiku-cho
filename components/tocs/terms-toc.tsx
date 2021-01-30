import BaseToc from './base-toc'

const TermsToc: React.VFC = () => {
  const termsTocs = [
    {
      title: '利用規約',
      id: '利用規約',
    },
    {
      title: 'プライバシーポリシー',
      id: 'プライバシーポリシー',
    },
  ]

  return <BaseToc tocList={termsTocs}></BaseToc>
}

export default TermsToc
