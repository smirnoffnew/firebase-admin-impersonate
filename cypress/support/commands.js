import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/firestore"
import { attachCustomCommands } from "cypress-firebase"

//dev firebase api keys
const devConfig = {
  apiKey: Cypress.env('CYPRESS_FIREBASE_API_KEY'),
  authDomain: Cypress.env('CYPRESS_FIREBASE_AUTH_DOMAIN'),
  databaseURL: Cypress.env('CYPRESS_FIREBASE_DATABASE_URL'),
  projectId: Cypress.env('CYPRESS_FIREBASE_PROJECT_ID'),
  storageBucket: Cypress.env('CYPRESS_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: Cypress.env('CYPRESS_FIREBASE_MESSAGING_SENDER_ID'),
  measurementId: Cypress.env('CYPRESS_FIREBASE_MEASUREMENT_ID'),
  appId: Cypress.env('CYPRESS_FIREBASE_APP_ID'),
}

const fbConfig = {
  ...devConfig
}

firebase.initializeApp(fbConfig)

attachCustomCommands({ Cypress, cy, firebase })
