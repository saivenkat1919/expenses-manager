// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARliP8MMBlVrRFfU9VAkWXW0bdfwxiVC4",
  authDomain: "expensetracker-5dd2d.firebaseapp.com",
  projectId: "expensetracker-5dd2d",
  storageBucket: "expensetracker-5dd2d.firebasestorage.app",
  messagingSenderId: "769442960686",
  appId: "1:769442960686:web:5494cb6abff55c3157d6bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Export it properly so App.js can import it
export { db };