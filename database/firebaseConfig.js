// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: `${process.env.firebase_apiKey}`,
//   authDomain: `${process.env.firebase_authDomain}`,
//   projectId: `${process.env.firebase_projectId}`,
//   storageBucket: `${process.env.firebase_storageBucket}`,
//   messagingSenderId: `${process.env.firebase_messagingSenderId}`,
//   appId: `${process.env.firebase_appId}`,
//   measurementId: `${process.env.firebase_measurementId}`,
//   databaseURL: `${process.env.firebase_databaseURL}`
// };

// // Initialize Firebase
// const databaseRef = initializeApp(firebaseConfig);

// export default {databaseRef, firebaseConfig};

// utils/firebase.js

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: `${process.env.firebase_apiKey}`,
  authDomain: `${process.env.firebase_authDomain}`,
  projectId: `${process.env.firebase_projectId}`,
  storageBucket: `${process.env.firebase_storageBucket}`,
  messagingSenderId: `${process.env.firebase_messagingSenderId}`,
  appId: `${process.env.firebase_appId}`,
  measurementId: `${process.env.firebase_measurementId}`,
  databaseURL: `${process.env.firebase_databaseURL}`,
};

// Khởi tạo Firebase
// if (!firebase.apps.length) {

// }

export const databaseRef = initializeApp(firebaseConfig);

const firebase = getDatabase(databaseRef);
// firebase.initializeApp(firebaseConfig);

export default firebase;
