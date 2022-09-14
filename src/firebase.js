// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_AWlYp3XYg3Voa6rF9DJsHKYplRTWxtw",
  authDomain: "task-83f51.firebaseapp.com",
  projectId: "task-83f51",
  storageBucket: "task-83f51.appspot.com",
  messagingSenderId: "584726542589",
  appId: "1:584726542589:web:4a0697d38a45be2744a694"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export default db