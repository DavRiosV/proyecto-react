import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// ...
import { BrowserRouter } from 'react-router-dom';
import "firebase/compat/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6PuOT7E9gf3mxxCeAIFpwlfnelYcD-no",
  authDomain: "proyecto-react-da05a.firebaseapp.com",
  projectId: "proyecto-react-da05a",
  storageBucket: "proyecto-react-da05a.appspot.com",
  messagingSenderId: "937570975909",
  appId: "1:937570975909:web:46ffd10a6a47488be64d4c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
