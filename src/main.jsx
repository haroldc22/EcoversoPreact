import { render } from 'preact'
import { App } from './app'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlu_hQ2ht79r-ldOHhPkV7rxtGHx98agY",
  authDomain: "ecoverso-4881d.firebaseapp.com",
  projectId: "ecoverso-4881d",
  storageBucket: "ecoverso-4881d.appspot.com",
  messagingSenderId: "215799252742",
  appId: "1:215799252742:web:f3c9a15a1e4f5f35d8c087"
};

const app = initializeApp(firebaseConfig);

render(<App />, document.getElementById('app'))
