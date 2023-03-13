// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD8JCXMfaRIORfqzIoOmCpkkNxuXhZzACs",
  authDomain: "amar-01.firebaseapp.com",
  projectId: "amar-01",
  storageBucket: "amar-01.appspot.com",
  messagingSenderId: "73297107858",
  appId: "1:73297107858:web:cb1e9e75fc075fc17d7f4b",
  measurementId: "G-Q69Y47TD3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(); 

export { app, auth }; 
