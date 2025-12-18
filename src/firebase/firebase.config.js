// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgabj_786roYsLCfv5WZUZ8fcIoyBMhGQ",
  authDomain: "bloodwebauthentication.firebaseapp.com",
  projectId: "bloodwebauthentication",
  storageBucket: "bloodwebauthentication.firebasestorage.app",
  messagingSenderId: "399021278820",
  appId: "1:399021278820:web:eed6551bda20023dd3c171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;