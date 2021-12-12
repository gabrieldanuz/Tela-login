import firebase from 'firebase'

import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDAyh0a9K8ZJ4jWhPGHhUvGnYrtxxhj77w',
  authDomain: 'login-firebase-a8710.firebaseapp.com',
  projectId: 'login-firebase-a8710',
  storageBucket: 'login-firebase-a8710.appspot.com',
  messagingSenderId: '1037331304532',
  appId: '1:1037331304532:web:0680096d5fa2b70c1a5dc1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = firebase.firestone()

export default {
  firebase,
  db
}
