// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpj2P_1UFQTjsQmqjxnLtKtaHt7O8RTp0",
  authDomain: "anonapp-31aae.firebaseapp.com",
  projectId: "anonapp-31aae",
  storageBucket: "anonapp-31aae.appspot.com",
  messagingSenderId: "909376827878",
  appId: "1:909376827878:web:05bcfdad13c3eea014a627",
  measurementId: "G-EF4DPVYFCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);
// const analytics = getAnalytics(app);
