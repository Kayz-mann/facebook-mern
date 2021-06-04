import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD5KRZaV_h8h9Gh464kFNOm34V685EB3fw",
//   authDomain: "facebook-backend-612d1.firebaseapp.com",
//   projectId: "facebook-backend-612d1",
//   storageBucket: "facebook-backend-612d1.appspot.com",
//   messagingSenderId: "281818656641",
//   appId: "1:281818656641:web:ab6d87c547305952294280",
//   measurementId: "G-NKD4RJHMGF"
// };

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export  { auth, provider };
  export  { db };