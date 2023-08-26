import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZIhNdFwVthYd5SxY-4_0LuIL3nTEQT5k",
  authDomain: "disneyplus-clone-f5cc5.firebaseapp.com",
  projectId: "disneyplus-clone-f5cc5",
  storageBucket: "disneyplus-clone-f5cc5.appspot.com",
  messagingSenderId: "759782847740",
  appId: "1:759782847740:web:b9ddd317117be8601b5379",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
