// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDi8lwBXsX7R47BLlG2kGR2rqfdLB4HIfE",
    authDomain: "disneyplus-clone-261f2.firebaseapp.com",
    projectId: "disneyplus-clone-261f2",
    storageBucket: "disneyplus-clone-261f2.appspot.com",
    messagingSenderId: "656488869189",
    appId: "1:656488869189:web:6cad0dfab6bb6d11af222c",
    measurementId: "G-BT2XBGNTRF"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Initialize Firebase THE OLD WAY
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });


// TRY TO  EXPORT THIS WAY
// export { auth, storage, provider };
 export default db;