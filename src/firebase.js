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
  apiKey: "AIzaSyC3jZ2D41D4xA-5MtgNpJYBGh4vcFjjFGc",
  authDomain: "facebook-messenger-clone-f93a1.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-f93a1.firebaseio.com",
  projectId: "facebook-messenger-clone-f93a1",
  storageBucket: "facebook-messenger-clone-f93a1.appspot.com",
  messagingSenderId: "1057114619331",
  appId: "1:1057114619331:web:85de927bd86ee3962c5176",
  measurementId: "G-RBS4QMB9BB"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export  { auth, provider };
  export  { db };