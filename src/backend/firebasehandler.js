
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import {getAnalytics } from 'firebase/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyBYiDut0bOiCXdu73RG6hlqyant2HVT6zI",
  authDomain: "fir-73078.firebaseapp.com",
  databaseURL: "https://fir-73078-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-73078",
  storageBucket: "fir-73078.appspot.com",
  messagingSenderId: "533536071702",
  appId: "1:533536071702:web:fc733d278310610661d537"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDatabase = getDatabase(app);