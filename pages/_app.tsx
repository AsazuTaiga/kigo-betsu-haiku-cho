import '../global.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useEffect } from 'react'
import firebaseConfig from '../firebase-config.json'
import { AppProps } from 'next/dist/next-server/lib/router/router'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    }
  })
  return <Component {...pageProps} />
}
