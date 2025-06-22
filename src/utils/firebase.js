// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADAgm3T7zjZvDSzTjh2VvqPtNlqCrCdBU",
  authDomain: "movieapp-603a1.firebaseapp.com",
  projectId: "movieapp-603a1",
  storageBucket: "movieapp-603a1.firebasestorage.app",
  messagingSenderId: "740375664513",
  appId: "1:740375664513:web:a01c40e08473c75032fa80",
  measurementId: "G-K6Z03Y7QXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();