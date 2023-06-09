// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAnvIah0fqw4JX010cten5qcxLHO8UrHNU",
  authDomain: "hash-based-password-manager.firebaseapp.com",
  databaseURL:
    "https://hash-based-password-manager-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hash-based-password-manager",
  storageBucket: "hash-based-password-manager.appspot.com",
  messagingSenderId: "184343159096",
  appId: "1:184343159096:web:f9ef33f7b9477837d021cd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const firebaseDb = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuth = getAuth(app);
