import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7fm89JrvQnMkNWLtPXjI7Tm-VhG3EYJo",
  authDomain: "ecommerceropa-62f1c.firebaseapp.com",
  projectId: "ecommerceropa-62f1c",
  storageBucket: "ecommerceropa-62f1c.appspot.com",
  messagingSenderId: "373395786511",
  appId: "1:373395786511:web:5699a92d8cb67cb311cc7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db