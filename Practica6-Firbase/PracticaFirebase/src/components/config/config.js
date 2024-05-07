// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwNHUq-3MsoNnzswyjBX4dMrnVDeKHm64",
  authDomain: "practica-react-60be5.firebaseapp.com",
  projectId: "practica-react-60be5",
  storageBucket: "practica-react-60be5.appspot.com",
  messagingSenderId: "509431162388",
  appId: "1:509431162388:web:583198e111f7bee8ade901",
  measurementId: "G-5SB52CPXTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);