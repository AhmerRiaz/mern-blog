// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2e5b0.firebaseapp.com",
  projectId: "mern-blog-2e5b0",
  storageBucket: "mern-blog-2e5b0.appspot.com",
  messagingSenderId: "575267389810",
  appId: "1:575267389810:web:2ee0b8827f526b0fba1deb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);