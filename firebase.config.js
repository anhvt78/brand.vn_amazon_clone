// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGAp1JayX2tQ7OSStAUifzfzzenum0ABo",
  authDomain: "brandprj.firebaseapp.com",
  projectId: "brandprj",
  storageBucket: "brandprj.appspot.com",
  messagingSenderId: "109569890881",
  appId: "1:109569890881:web:724f479a14e98e2a7bc4c0",
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default firebaseConfig;
