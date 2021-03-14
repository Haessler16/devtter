var admin = require("firebase-admin")

var serviceAccount = require("../devtter-firebase-adminsdk.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://devtter-f0e0f.firebaseio.com",
})

export const firestore = admin.firestore()
