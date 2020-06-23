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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  console.log(snapshot);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
