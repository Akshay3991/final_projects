// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB7rzvhpyDJgf09G0eVZsbVqIJSgC-9O3k",
    authDomain: "hocs-5d374.firebaseapp.com",
    databaseURL: "https://hocs-5d374-default-rtdb.firebaseio.com",
    projectId: "hocs-5d374",
    storageBucket: "hocs-5d374.appspot.com",
    messagingSenderId: "1034428278162",
    appId: "1:1034428278162:web:0cb4b1400f8eac3d13cd4b",
    measurementId: "G-95C2MNM2B8"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider };
