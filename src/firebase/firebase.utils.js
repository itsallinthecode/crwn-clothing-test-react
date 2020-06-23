import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB2TKyWsGJPWphrugI9CfvQC33DTQqMQzs",
  authDomain: "crwn-db-d345f.firebaseapp.com",
  databaseURL: "https://crwn-db-d345f.firebaseio.com",
  projectId: "crwn-db-d345f",
  storageBucket: "crwn-db-d345f.appspot.com",
  messagingSenderId: "562528485240",
  appId: "1:562528485240:web:73445bae0b475e7c4d128d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
