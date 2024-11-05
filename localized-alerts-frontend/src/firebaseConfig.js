// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Include if using Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyBZBU1c44SEheh-V6FybOrjb6mPNPXvZK4",
  authDomain: "real-time-alerts-model.firebaseapp.com",
  projectId: "real-time-alerts-model",
  storageBucket: "real-time-alerts-model.firebasestorage.app",
  messagingSenderId: "246341514536",
  appId: "1:246341514536:web:8837adb7db74212c590c1d",
  measurementId: "G-WLMS9Z6Y7Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Get reference to the Realtime Database

export { database };
