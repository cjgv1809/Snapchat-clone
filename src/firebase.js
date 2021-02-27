import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKqV-5CCGDlWynQzyb6L-krCFQfatjwF4",
  authDomain: "snapchat-clone-6eab7.firebaseapp.com",
  projectId: "snapchat-clone-6eab7",
  storageBucket: "snapchat-clone-6eab7.appspot.com",
  messagingSenderId: "409906255684",
  appId: "1:409906255684:web:62c31618e9c64a0fce2911",
  measurementId: "G-STGP7JWZTZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
