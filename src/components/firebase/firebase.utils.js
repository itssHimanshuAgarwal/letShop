import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAuXiGQUgEgwlbTGEr7Ogz6bqGwu0KLn0E",
  authDomain: "crwn-db-5b922.firebaseapp.com",
  databaseURL: "https://crwn-db-5b922.firebaseio.com",
  projectId: "crwn-db-5b922",
  storageBucket: "crwn-db-5b922.appspot.com",
  messagingSenderId: "628957513356",
  appId: "1:628957513356:web:e750dd34d209a188075da9",
  measurementId: "G-N71KNWWPE7",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
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