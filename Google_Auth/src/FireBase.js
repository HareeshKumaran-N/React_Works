

import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDoqTVW7GDUu4PkhKLeyi3-r0Sdod-evmg",
  authDomain: "context-api-23602.firebaseapp.com",
  projectId: "context-api-23602",
  storageBucket: "context-api-23602.appspot.com",
  messagingSenderId: "1097750667503",
  appId: "1:1097750667503:web:d8ade0e2a90b22ee4dfb1a",
  measurementId: "G-PXZ1GEXB7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle =()=>{
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result);
    
    }).catch((error)=>{console.log(error)})
}