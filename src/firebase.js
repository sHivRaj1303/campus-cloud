// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5dB3bjgefZfT-AVTcDXh6KmU4V0BAQ4U",
  authDomain: "campus-cloud-8bec9.firebaseapp.com",
  projectId: "campus-cloud-8bec9",
  storageBucket: "campus-cloud-8bec9.firebasestorage.app",
  messagingSenderId: "1087557334865",
  appId: "1:1087557334865:web:1a7c383bb8b88902bc4570",
  measurementId: "G-TDJRL8WPFB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.error("Persistence failed. Multiple tabs open.");
    } else if (err.code === 'unimplemented') {
      console.error("Persistence is not available in this browser.");
    }
  });
