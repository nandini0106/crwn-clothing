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

      export const createUserProfileDocument = async (userAuth, additinalData) => {
        if(!userAuth) return;
        const userRef =firestore.doc(`users/${userAuth.uid}`);
        const snapShot= await userRef.get();
        if(!snapShot.exists){
          const {displayName, email} =userAuth;
          const createdAt = new Date();
          try{
await userRef.set({
  displayName,
  email,createdAt,
  ...additinalData
})
          }catch(error){
console.log('error creating user',error.message);
          }
        }
        return userRef;
      };
firebase.initializeApp(config);
export const auth =firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;