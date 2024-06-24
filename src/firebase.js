// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB6VpWqYdcGl6VVxYpoOWa-cHH-kFbrK8",
  authDomain: "coupon-deal-cd.firebaseapp.com",
  projectId: "coupon-deal-cd",
  storageBucket: "coupon-deal-cd.appspot.com",
  messagingSenderId: "276874118481",
  appId: "1:276874118481:web:d581727419ab4fed84ff70",
  measurementId: "G-33PDPHBD04",
};

// Initialize Firebase

// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth();

export {fireDb, auth}

