// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBHbx-jjZTjB2rvbTCsyXcHU1Sv9xLdEwU",
    authDomain: "twitter-clone-8ad61.firebaseapp.com",
    projectId: "twitter-clone-8ad61",
    storageBucket: "twitter-clone-8ad61.appspot.com",
    messagingSenderId: "648022966278",
    appId: "1:648022966278:web:f609b56b4e9b6fb2e28387"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;