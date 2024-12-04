// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhdvlLzX6t7I7MD6lY9-mNDJwVK7AlajQ",
  authDomain: "clone-2fb4a.firebaseapp.com",
  projectId: "clone-2fb4a",
  storageBucket: "clone-2fb4a.firebasestorage.app",
  messagingSenderId: "1073765592013",
  appId: "1:1073765592013:web:04943075be3e789da23284"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()