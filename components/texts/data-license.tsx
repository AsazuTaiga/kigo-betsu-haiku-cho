import colors from '../../colors.json'

const DataLicense: React.FC = () => (
  <>
    <div className="dataLicense">
      <p>
        本アプリケーション内の季語、読み仮名、旧仮名、傍題につきましては、
        <a
          className="dataBaseLink"
          href="http://www.haiku-data.jp/index.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          現代俳句データベース
        </a>
        の季語データをもとに作成しております。（一部修正・加工しています）
      </p>
      <p>
        現代俳句データベース運営者（現代俳句協会IT部）から、指定データの利用許諾を頂いております。
      </p>
      <p>運営者の都合により、利用許諾が予告なく終了することもございます。</p>
    </div>
    <style jsx>{`
      .dataLicense {
        background-color: ${colors.weakTheme};
        font-size: 10px;
        color: ${colors.weakBlack};
        border-radius: 4px;
        padding: 0 12px;
        max-width: 400px;
      }
      .dataBaseLink {
        text-decoration: none;
        color: ${colors.primary};
      }
      .dataBaseLink:hover {
        text-decoration: underline ${colors.primary};
      }
    `}</style>
  </>
)

export default DataLicense
