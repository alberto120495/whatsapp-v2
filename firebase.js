import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDObMjavQw8vQgi1yy8Fa02vc9r-laEqH0",
  authDomain: "whatsapp-2-97d1f.firebaseapp.com",
  projectId: "whatsapp-2-97d1f",
  storageBucket: "whatsapp-2-97d1f.appspot.com",
  messagingSenderId: "818682069867",
  appId: "1:818682069867:web:4b8821307dcb57eb2d822e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
