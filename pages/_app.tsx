import '../global.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useState, useEffect, createContext } from 'react'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const UserContext = createContext(null)

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyCv_OXhiG-PpQB-0Sd8AT5b6y_6W-L5yYY',
    authDomain: 'kigo-betsu.firebaseapp.com',
    databaseURL: 'https://kigo-betsu.firebaseio.com',
    projectId: 'kigo-betsu',
    storageBucket: 'kigo-betsu.appspot.com',
    messagingSenderId: '935248329018',
    appId: '1:935248329018:web:dd46df113c54fb29f67803',
    measurementId: 'G-QF1V6NCF66',
  }
  useEffect(() => {
    firebase.initializeApp(firebaseConfig)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  })
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}
