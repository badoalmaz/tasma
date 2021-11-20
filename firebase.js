import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnaTCBXuW5kllWfm159KY93zyTdzCnBAE",
  authDomain: "disney-next.firebaseapp.com",
  projectId: "disney-next",
  storageBucket: "disney-next.appspot.com",
  messagingSenderId: "953460518141",
  appId: "1:953460518141:web:7f6dd9d6223132f1e56294",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app(); //! ternary should be here because of the nextjs

const db = app.firestore();

export { db };
