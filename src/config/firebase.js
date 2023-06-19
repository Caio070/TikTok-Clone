import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDkyu4jojWhn8sneYhnqLgrqlIOFQy6jbk",
  authDomain: "tiktok-b8db5.firebaseapp.com",
  projectId: "tiktok-b8db5",
  storageBucket: "tiktok-b8db5.appspot.com",
  messagingSenderId: "1036451753456",
  appId: "1:1036451753456:web:a2be678988da7c6c7f4135",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
