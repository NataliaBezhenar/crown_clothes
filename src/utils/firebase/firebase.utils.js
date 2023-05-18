import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-_UxuwZPOQg2iwaHd5QuRSq28oPEcNy8",
  authDomain: "crown-clothing-db-f1763.firebaseapp.com",
  projectId: "crown-clothing-db-f1763",
  storageBucket: "crown-clothing-db-f1763.appspot.com",
  messagingSenderId: "300581622804",
  appId: "1:300581622804:web:5632ebe6217092b5110301",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
