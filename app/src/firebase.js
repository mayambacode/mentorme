// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwfZ2_X8_Vgc5AxQXxTh7jrC7rhlqkXlA",
  authDomain: "mentormeauth.firebaseapp.com",
  projectId: "mentormeauth",
  storageBucket: "mentormeauth.appspot.com",
  messagingSenderId: "94342484765",
  appId: "1:94342484765:web:6b95f18e4999ad734947f4",
  measurementId: "G-J9XVVQ3XSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
