// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3BfKa2IDbBYiCWpiwUw7me_G0a5VOT_s",
  authDomain: "attendence-tracker-90940.firebaseapp.com",
  projectId: "attendence-tracker-90940",
   storageBucket: "attendence-tracker-90940.firebasestorage.app", // ✅ fixed
  messagingSenderId: "575531776559",
  appId: "1:575531776559:web:fb14ef4839e1a79fa564da",
  measurementId: "G-BDEPT9DS5C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Analytics (safe initialization)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    } else {
      console.warn("Analytics not supported in this environment.");
    }
  });
}

export { app, db, auth, storage, analytics };
