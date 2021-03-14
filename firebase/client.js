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

const db = firebase.firestore()

const mapUserFromFirebaseAuth = (user) => {
  const { photoURL, email, displayName, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  }
}

export const onAuthStateChange = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
    onChange(normalizedUser)
  })
}

export const loginWithGithub = async () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .catch((error) => console.log(error))
}

export const addDevit = ({ avatar, contend, userId, userName, img }) => {
  return db.collection("devits").add({
    avatar,
    contend,
    img,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

export const fetchLatestDevits = async () => {
  const { docs } = await db
    .collection("devits")
    .orderBy("createdAt", "desc")
    .get()
  return docs.map((doc) => {
    const data = doc.data()
    const id = doc.id
    const { createdAt } = data
    // const date = new Date(createdAt.seconds * 1000)
    // const normalizedCreatedAt = new Intl.DateTimeFormat("es-LA").format(
    //   date
    // )
    return { ...data, id, createdAt: +createdAt.toDate() }
  })
}

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`)
  const task = ref.put(file)
  return task
}
