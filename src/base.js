// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_cY1dzJNsiUXIHtIRhMLgInHU8LYOMgo",
  authDomain: "ecoverso-ant.firebaseapp.com",
  projectId: "ecoverso-ant",
  storageBucket: "ecoverso-ant.appspot.com",
  messagingSenderId: "851416216625",
  appId: "1:851416216625:web:62d3f0b8e617b6e5cb9110"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export default firebase;