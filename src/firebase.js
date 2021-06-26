import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCAbZmvur57d1WofkrWPc9bz1D-wfCw8L4",
    authDomain: "clone-be58b.firebaseapp.com",
    databaseURL: "https://clone-be58b.firebaseio.com",
    projectId: "clone-be58b",
    storageBucket: "clone-be58b.appspot.com",
    messagingSenderId: "1081589845338",
    appId: "1:1081589845338:web:7ee8e67ebbfddef6f63763",
    measurementId: "G-WW96V4VKTY"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


export { db, auth };