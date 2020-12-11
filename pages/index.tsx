import Head from 'next/head'
import Link from 'next/link'
import LandingHeder from '../components/headers/landing-header'
import colors from '../colors.json'

export const Home = (): JSX.Element => {
  return (
    <div className="container">
      <Head>
        <title>季語別俳句帖とは？</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingHeder />
      <main>
        <img src="top-logo.svg" className="topLogo" alt="季語別俳句帖"></img>
        <div className="sectionWrapper">
          <section>
            <div>
              <h2>手ぶらで散歩、そのまま吟行。</h2>
              <p>あまりに突然のことだった。</p>
              <p>
                コンビニから帰る途中、
                <br />
                一羽の川鵜が、滑らかに飛来して、
                <br />
                水面に吸い込まれていく様を見た。
              </p>
              <p>
                季寄せや句帳を持っていない時でも、
                <br />
                大切な「シャッターチャンス」は逃したくない。
                <br />
                そんな写生派のあなたに。
              </p>
            </div>
            <img src="/dog_walking.svg" alt=""></img>
          </section>
          <section>
            <div>
              <h2>去年は蜜柑でどんな句を書いたっけ。</h2>
              <p>
                俳句を作るとき、
                <br />
                過去に自分がその季語で
                <br />
                どんな句を作ったのか
                <br />
                気になるときがありませんか？
              </p>
              <p>
                それで、句帳をめっくてみたら、
                <br />
                「ああ、あんなこともあったな」なんて。
              </p>
              <p>
                思い出に少し浸ってから、
                <br />
                さて、類想の海を抜け出そうか。
              </p>
            </div>
            <img src="/reading_a_book.svg" alt=""></img>
          </section>
          <section>
            <div>
              <h2>もう、大切な俳句を失くさない。</h2>
              <p>昔から、俳句の管理方法が定まらない。</p>
              <p>
                普段は句帳に書きつけているが、
                <br />
                ぱっと取り出せない時には、
                <br />
                仕事用のノートの最後のページだったり、
                <br />
                スマートフォンのメモアプリだったり、
                <br />
                果てはチラシの裏にまで。
              </p>
              <p>
                知人はExcelで管理しているそうだ。
                <br />
                骨が折れそうだけど、それが一番かもしれない。
              </p>
              <p>でも、もっと手軽なものがあればなあ――。</p>
            </div>
            <img src="/data_storage.svg" alt=""></img>
          </section>
        </div>

        <img src="top-logo.svg" className="topLogo" alt="季語別俳句帖" />
        <div className="linkWrap">
          <Link href="/log-in">ログイン</Link>
          <Link href="/register">新規登録</Link>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .topLogo {
          width: 80%;
          max-width: 400px;
          margin-top: 100px;
        }

        .sectionWrapper {
          display: flex;
          flex-wrap: wrap;
          max-width: 800px;
        }

        section {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          width: 100%;
          margin-top: 60px;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
            -9px -9px 16px rgba(255, 255, 255, 0.5);
          scroll-snap-align: start;
        }

        section img {
          width: 100%;
          max-width: 300px;
          margin: 20px;
        }

        h2 {
          border-bottom: 4px solid #acaaff;
          font-size: 18px;
        }

        p {
          line-height: 30px;
          font-size: 14px;
          max-width: 400px;
        }

        .linkWrap {
          margin-top: 100px;
        }
      `}</style>
      <style jsx global>{`
        .linkWrap a {
          color: ${colors.primary};
          text-decoration: none;
          margin: 20px;
          font-size: 18px;
        }
      `}</style>
    </div>
  )
}

export default Home
