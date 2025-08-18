// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZCfEGFtfrdPFUQnaHIjQUdQa9nMSMHoQ",
  authDomain: "mindfulnessapp-976c0.firebaseapp.com",
  projectId: "mindfulnessapp-976c0",
  storageBucket: "mindfulnessapp-976c0.firebasestorage.app",
  messagingSenderId: "925927761844",
  appId: "1:925927761844:web:9580427f5621b5078cb4e1",
  measurementId: "G-TVEHPCZRV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);