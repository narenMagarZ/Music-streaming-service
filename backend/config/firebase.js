// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLMDsl7l1ytMHrFTGzj3wtqFNiHTkeAZM",
  authDomain: "music-bucket-ebf02.firebaseapp.com",
  projectId: "music-bucket-ebf02",
  storageBucket: "music-bucket-ebf02.appspot.com",
  messagingSenderId: "717225998636",
  appId: "1:717225998636:web:12d862154147cc40c51489",
  measurementId: "G-4TVC69WHWX"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);