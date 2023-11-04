import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/firebase-database'

const config = {
  apiKey: "AIzaSyBAzG14mxHm_zG7RB5X40nX8mOgWG1J5Yk",
  authDomain: "todo-list-d0aa1.firebaseapp.com",
  projectId: "todo-list-d0aa1",
  storageBucket: "todo-list-d0aa1.appspot.com",
  messagingSenderId: "25795085870",
  appId: "1:25795085870:web:ad22c144c8607281a341bf",
  measurementId: "G-TRZGPXN14Z"
}

firebase.initializeApp(config);

export default firebase;
