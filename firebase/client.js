import * as firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxCZbOT0HtPH3gNHkQVNZH_UmveHvSO5k",
  authDomain: "devtter-f0e0f.firebaseapp.com",
  databaseURL: "https://devtter-f0e0f.firebaseio.com",
  projectId: "devtter-f0e0f",
  storageBucket: "devtter-f0e0f.appspot.com",
  messagingSenderId: "253255122823",
  appId: "1:253255122823:web:b6e553ce181c2b2f3fdd22",
  measurementId: "G-VG467KX9LN",
}
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const mapUserFromFirebaseAuth = (user) => {
  const { photoURL, email, displayName } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
  }
}

export const onAuthStateChange = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
    onChange(normalizedUser)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .catch((error) => console.log(error))
}
