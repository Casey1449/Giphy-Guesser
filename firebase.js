import firebase from "firebase";

const firebaseKey = process.env.REACT_APP_FIREBASE_KEY;

const config = {
  apiKey: firebaseKey,
  authDomain: "giphy-guesser.firebaseapp.com",
  databaseURL: "https://giphy-guesser.firebaseio.com",
  projectId: "giphy-guesser",
  storageBucket: "",
  messagingSenderId: "398692345893"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export default firebase;
