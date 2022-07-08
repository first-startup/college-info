// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwZClMpj2csqREu2E3S5MJiY52L0-3xPk",
  authDomain: "college-startup-a9ce0.firebaseapp.com",
  projectId: "college-startup-a9ce0",
  storageBucket: "college-startup-a9ce0.appspot.com",
  messagingSenderId: "901192440630",
  appId: "1:901192440630:web:6ea11c3b1349a6be703197",
  measurementId: "G-4RJDRX6SJ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
