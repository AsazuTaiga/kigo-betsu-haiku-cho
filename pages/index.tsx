import Head from 'next/head'
import SaveButton from '../components/buttons/save-button'
import CancelButton from '../components/buttons/cancel-button'
import LogInButton from '../components/buttons/log-in-button'
import RegisterButton from '../components/buttons/register-button'
import EditTooltip from '../components/tooltips/edit-tooltip'
import MenuTooltip from '../components/tooltips/menu-tooltip'
import SortTooltip from '../components/tooltips/sort-tooltip'
import KigoLink from '../components/links/kigo-link'
import BaseInput from '../components/inputs/base/base-input'
import ValidationInput from '../components/inputs/validation-input'
import DataLicense from '../components/texts/data-license'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">In development.</h1>
      <p>For the time being, the components are placed below.</p>

      <SaveButton onClick={() => alert('clicked!')}></SaveButton>
      <CancelButton onClick={() => alert('clicked!')}></CancelButton>
      <LogInButton onClick={() => alert('clicked!')}></LogInButton>
      <RegisterButton onClick={() => alert('clicked!')}></RegisterButton>
      <EditTooltip
        copyHandler={() => alert('clicked!')}
        editHandler={() => alert('clicked!')}
        tweetHandler={() => alert('clicked!')}
        deleteHandler={() => alert('clicked!')}
      ></EditTooltip>
      <MenuTooltip
        configHandler={() => alert('clicked!')}
        logOutHandler={() => alert('clicked!')}
        termsHandler={() => alert('clicked!')}
        privacyHandler={() => alert('clicked!')}
      ></MenuTooltip>
      <SortTooltip
        newerHandler={() => alert('clicked!')}
        olderHandler={() => alert('clicked!')}
      ></SortTooltip>
      <KigoLink
        kigo={{
          id: 1,
          name: '桜',
          season: 'spring',
        }}
      ></KigoLink>
      <KigoLink
        kigo={{
          id: 2,
          name: '青葉',
          season: 'summer',
        }}
      ></KigoLink>
      <KigoLink
        kigo={{
          id: 3,
          name: '紅葉',
          season: 'fall',
        }}
      ></KigoLink>
      <KigoLink
        kigo={{
          id: 4,
          name: '枯木',
          season: 'winter',
        }}
      ></KigoLink>
      <KigoLink
        kigo={{
          id: 5,
          name: '初日の出',
          season: 'newYear',
        }}
      ></KigoLink>
      <BaseInput
        placeholder="キーワードで絞り込み..."
        type="text"
        name="search"
        onChange={(changeEvent) => {
          alert(changeEvent.target.value)
        }}
      ></BaseInput>
      <ValidationInput
        validationMessage="パスワードを入力してください。"
        placeholder="パスワード"
        name="パスワード"
        type="password"
      ></ValidationInput>
      <ValidationInput
        validationMessage="メールアドレスを入力してください。"
        placeholder="メールアドレス"
        name="email"
        type="email"
        isInvalid
      ></ValidationInput>
      <DataLicense />
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
    `}</style>

    <style jsx global>{`
      main > * {
        margin-bottom: 20px;
      }
    `}</style>
  </div>
)

export default Home
