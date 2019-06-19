import * as firebase from "firebase";
import "firebase/app";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5ExVBb8K-nJkRcg2p5JGlV66IVwqBQ-s",
  authDomain: "expensify-bffed.firebaseapp.com",
  databaseURL: "https://expensify-bffed.firebaseio.com",
  projectId: "expensify-bffed",
  storageBucket: "expensify-bffed.appspot.com",
  messagingSenderId: "697990601563",
  appId: "1:697990601563:web:63714ecd4d0b4fc5"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

export { firebase, database as default };

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
