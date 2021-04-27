import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAaGaSmoqXnkfUnxaMILbFl-Fm6rAvSOtc",
  authDomain: "react-contact-form-2be8a.firebaseapp.com",
  projectId: "react-contact-form-2be8a",
  storageBucket: "react-contact-form-2be8a.appspot.com",
  messagingSenderId: "721476165361",
  appId: "1:721476165361:web:42da95522c45a3eddb5350",
});

const db = firebaseApp.firestore();

export { db };
