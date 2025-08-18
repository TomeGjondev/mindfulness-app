import React from 'react';
import './Header1.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase"; // make sure this path is correct

const provider = new GoogleAuthProvider();

function loginWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Logged in as:", result.user);
    })
    .catch((error) => {
      console.error(error);
    });
}

const Header1 = () => {
  return (
    <div className="header1">
      <h2>Mindfulness</h2>
      <button onClick={loginWithGoogle} className="login-button">
        Log in with Google
      </button>
    </div>
  );
};

export default Header1;
