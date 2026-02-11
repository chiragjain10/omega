// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5DcDlxuSADMwvyDl3vXvg8WYEy-pxnlU",
  authDomain: "omega-bc1da.firebaseapp.com",
  projectId: "omega-bc1da",
  storageBucket: "omega-bc1da.appspot.com",
  messagingSenderId: "918976469401",
  appId: "1:918976469401:web:f9e0059b653f715e80db08",
  measurementId: "G-XJPRCXHPMH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
const db = getFirestore(app);       // Firestore
const storage = getStorage(app);    // Storage
const auth = getAuth(app);          // Authentication

// Export all for use in other files
export { app, analytics, db, storage, auth };
