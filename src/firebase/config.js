import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase-app';

const firebaseConfig = {
  apiKey: "AIzaSyCY8qI1fDslK9-s76deGkz4A679yvdLgG0",
  authDomain: "mini-blog-aab4d.firebaseapp.com",
  projectId: "mini-blog-aab4d",
  storageBucket: "mini-blog-aab4d.appspot.com",
  messagingSenderId: "762034247201",
  appId: "1:762034247201:web:96a6107d1da44b29c27560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Iniciando o banco de dados do firebase
const db = getFirestore(app);

// exportando o banco de dados
export { db };
