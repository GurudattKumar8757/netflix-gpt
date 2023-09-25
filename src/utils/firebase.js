// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVi8zJcB7nvoZQJqmnKF-_NMBwgqysxq8",
  authDomain: "netflixgpt-53724.firebaseapp.com",
  projectId: "netflixgpt-53724",
  storageBucket: "netflixgpt-53724.appspot.com",
  messagingSenderId: "575374225765",
  appId: "1:575374225765:web:606c563b7663649844b18c",
  measurementId: "G-E2RKQ8G56F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
