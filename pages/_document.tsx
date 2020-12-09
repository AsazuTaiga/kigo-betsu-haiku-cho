import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html lang="ja">
        <Head prefix="og:http://ogp.me./ns#">
          <meta property="og:site_name" content="季語別俳句帖" />
          <meta property="og:title" content="季語別俳句帖" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://kigo-betsu-haiku-cho.vercel.app"
          />
          <meta
            property="og:image"
            content="https://gyazo.com/737a70b5922b35d1837839cadbe759af"
          />
          <meta
            property="og:description"
            content="俳句の管理にお困りですか？季語別の管理でスマートに。"
          />
          {/* <meta property="fb:app_id" content="FacebookのアプリID" /> */}
          <meta property="og:locale" content="ja_JP" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
