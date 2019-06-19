import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};
// console.log("p->", process.env.FIREBASE_API_KEY);
firebase.initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig)

const database = firebase.database();
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,GoogleAuthProvider, database as default };

// database
//   .ref()
//   .set({
//     like: "5",
//     location: {
//       city: "Delhi",
//       state: "delhi"
//     },
//     isSingle: true
//   })
//   .then(
//     success => {
//       console.log("success");
//     },
//     error => {
//       console.log("error");
//     }
//   );

// database.ref("like").set(46).then(
//     success => {
//       console.log("success");
//     },
//     error => {
//       console.log("error");
//     }
//   );
// database.ref("attributes").set({
//   height: 23,
//   weight: 78
// });

// database
//   .ref("like")
//   .remove()
//   .then(
//     success => {
//       console.log("success");
//     },
//     error => {
//       console.log("error");
//     }
//   );
