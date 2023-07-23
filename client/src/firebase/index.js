// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8IAJd8-W9Ak50bmaO46p99060ScTP0B4",
  authDomain: "farm-cart-22b37.firebaseapp.com",
  projectId: "farm-cart-22b37",
  storageBucket: "farm-cart-22b37.appspot.com",
  messagingSenderId: "297034392226",
  appId: "1:297034392226:web:f0e2db60e90007b2f1adfb",
  measurementId: "G-654XMPWN7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);