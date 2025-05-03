// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Danger Do not share 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcIrYZWYnBNXIG3YRZC-EHGw89j3HaGcY",
    authDomain: "auth-integration-sopon.firebaseapp.com",
    projectId: "auth-integration-sopon",
    storageBucket: "auth-integration-sopon.firebasestorage.app",
    messagingSenderId: "45184172313",
    appId: "1:45184172313:web:7b5b3985f26e6381a00588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service 
export const auth = getAuth(app);