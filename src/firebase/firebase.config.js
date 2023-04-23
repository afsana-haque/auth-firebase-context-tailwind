// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAgBzl1DcvdYMlLA5Zmnv_fkFz6PaPHcg",
  authDomain: "auth-firebase-context-ta-e78a3.firebaseapp.com",
  projectId: "auth-firebase-context-ta-e78a3",
  storageBucket: "auth-firebase-context-ta-e78a3.appspot.com",
  messagingSenderId: "658541708259",
  appId: "1:658541708259:web:3af57ecc75166307a7d6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;