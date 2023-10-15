// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDAUaikHX8VUOc-dK1QG7GgTOca0y9RRl0',
  authDomain: 'wfms-2d90d.firebaseapp.com',
  projectId: 'wfms-2d90d',
  storageBucket: 'wfms-2d90d.appspot.com',
  messagingSenderId: '696445084140',
  appId: '1:696445084140:web:3e575e83bc3240cfd960c9',
  measurementId: 'G-MJMTMYSYBN',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
