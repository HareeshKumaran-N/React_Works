//FIREBASE_-_-_-__--------------------------------
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoqTVW7GDUu4PkhKLeyi3-r0Sdod-evmg",
  authDomain: "context-api-23602.firebaseapp.com",
  projectId: "context-api-23602",
  storageBucket: "context-api-23602.appspot.com",
  messagingSenderId: "1097750667503",
  appId: "1:1097750667503:web:d8ade0e2a90b22ee4dfb1a",
  measurementId: "G-PXZ1GEXB7Q",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

//FIREBASE_-_-_-__--------------------------------

import { userProfileContext } from "./Context/userProfileContext";
import { useContext,useEffect,useMemo } from "react";
import { redirect,useNavigate } from "react-router-dom";
function Parent() {
  
  const { userProfile, setUserProfile, isAuthDone, setAuthDone } =
    useContext(userProfileContext);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('@CK',result.user);
        setUserProfile(result.user);
        setAuthDone(true);
       
      })
      .catch((error) => {
        console.log(error);
      });
  };
 const navigate=useNavigate();

  return (
    <>
      <button
        onClick={() => {
          signInWithGoogle();
          
        }}
      >
        Sign-In with Google
      </button>
      {(isAuthDone) ? (navigate('/A')): undefined}
    </>
  );
}

export default Parent;
