// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDH31i-_sAu-1xi8H1D547ZR4sutIKhjgw",
  authDomain: "netflix-clone-fbff6.firebaseapp.com",
  projectId: "netflix-clone-fbff6",
  storageBucket: "netflix-clone-fbff6.appspot.com",
  messagingSenderId: "481530577430",
  appId: "1:481530577430:web:2dce2cf783d0bc49cc6b37",
  measurementId: "G-VDPDW3QQYS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
