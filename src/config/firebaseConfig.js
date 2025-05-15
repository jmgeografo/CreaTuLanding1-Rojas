// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdPMaAvkTcGITeqfFVbX7cPFjsfTlak8g",
    authDomain: "coderapp-reactflex-umbria.firebaseapp.com",
    projectId: "coderapp-reactflex-umbria",
    storageBucket: "coderapp-reactflex-umbria.firebasestorage.app",
    messagingSenderId: "223679219088",
    appId: "1:223679219088:web:b9475b080988e335aadf15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)