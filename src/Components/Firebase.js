// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjuWGUJmltyBx4506eX1aujWWDeapQD2s",
  authDomain: "imranportfolioreact.firebaseapp.com",
  projectId: "imranportfolioreact",
  storageBucket: "imranportfolioreact.appspot.com",
  messagingSenderId: "887901069488",
  appId: "1:887901069488:web:a5af7af1ffd1323ff69b75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

// Initialize Firestore
const db = getFirestore(app);

export { storage, db, app };
