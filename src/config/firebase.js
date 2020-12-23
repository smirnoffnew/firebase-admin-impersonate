import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB3ZYZeViWedCfDr24dmmw2V0ADxgFU6fs",
  authDomain: "hellobeer-32e73.firebaseapp.com",
  projectId: "hellobeer-32e73",
  storageBucket: "hellobeer-32e73.appspot.com",
  messagingSenderId: "445462528668",
  appId: "1:445462528668:web:56567577a0d6973c51a359",
  measurementId: "G-VP1X19ENCT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
