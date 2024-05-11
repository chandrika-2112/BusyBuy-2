// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIzhaWaTcEE520nNK3eK8_hWHYpKGLlys",
  authDomain: "busybuy2-19ff5.firebaseapp.com",
  projectId: "busybuy2-19ff5",
  storageBucket: "busybuy2-19ff5.appspot.com",
  messagingSenderId: "640536934829",
  appId: "1:640536934829:web:f339aebf479d465b8c8924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
