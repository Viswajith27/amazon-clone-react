import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyKAHq7w2XBlxeDNnv28pAEoE8lIIhubU",
  authDomain: "clone-6a11a.firebaseapp.com",
  projectId: "clone-6a11a",
  storageBucket: "clone-6a11a.appspot.com",
  messagingSenderId: "1030956304046",
  appId: "1:1030956304046:web:cf63ef294dc81bb373cf3f",
  measurementId: "G-VEH72X863N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };