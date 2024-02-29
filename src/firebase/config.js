// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXPKBPNh3T0ulWnd5-woINnei6IN_jwro",
  authDomain: "papershop-2bdc7.firebaseapp.com",
  projectId: "papershop-2bdc7",
  storageBucket: "papershop-2bdc7.appspot.com",
  messagingSenderId: "171137035631",
  appId: "1:171137035631:web:8f99db0f635f721b18cc9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);