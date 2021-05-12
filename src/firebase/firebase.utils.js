import firebase from 'firebase/app';
import 'firebase/firestore';
import  'firebase/auth';

const config =
    {
        apiKey: "AIzaSyC0INe4YVnaPpBlkgNuqT1jAE_Zv2afJAQ",
        authDomain: "crwn-db-b1084.firebaseapp.com",
        projectId: "crwn-db-b1084",
        storageBucket: "crwn-db-b1084.appspot.com",
        messagingSenderId: "691780676144",
        appId: "1:691780676144:web:6f91986390872ade60dbf5",
        measurementId: "G-3BPRY6VB1M"
      };
firebase.initializeApp(config);
export const auth =firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;