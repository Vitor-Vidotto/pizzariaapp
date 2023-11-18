// firebaseconfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBaDowCvIEWwVcDG1nk-8dL0yFBHIfJsCQ",
  authDomain: "pizzaria-drongos.firebaseapp.com",
  databaseURL: "https://pizzaria-drongos-default-rtdb.firebaseio.com",
  projectId: "pizzaria-drongos",
  storageBucket: "pizzaria-drongos.appspot.com",
  messagingSenderId: "833022125377",
  appId: "1:833022125377:web:173413c4c3dc1c2db8edc0",
  measurementId: "G-E8EX686TD5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get authentication object
export const authentication = getAuth(firebaseApp);

// Get database object
export const database = getDatabase(firebaseApp);