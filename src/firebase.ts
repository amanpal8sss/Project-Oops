import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyAf7GyZYC6P9aypn73AU1Vgn9qz0LAgLLE",
  authDomain: "masteroops-a9d5c.firebaseapp.com",
  projectId: "masteroops-a9d5c",
  storageBucket: "masteroops-a9d5c.firebasestorage.app",
  messagingSenderId: "113762264706",
  appId: "1:113762264706:web:e7ba08a89ae825793af69b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);