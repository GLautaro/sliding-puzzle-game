// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "sliding-puzzle-loop3.firebaseapp.com",
  projectId: "sliding-puzzle-loop3",
  storageBucket: "sliding-puzzle-loop3.appspot.com",
  messagingSenderId: "141439750792",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-BF30LJ835L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
