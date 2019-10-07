import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAsjc-8h32zPZh0qJIBDU1_XSCDxtvhGXE",
  authDomain: "spotted-staszicv2.firebaseapp.com",
  databaseURL: "https://spotted-staszicv2.firebaseio.com",
  projectId: "spotted-staszicv2",
  storageBucket: "",
  messagingSenderId: "948345929307",
  appId: "1:948345929307:web:b846e779c8b6f59778097e",
  measurementId: "G-7KLNE78VG8"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


ReactDOM.render(<App firebase={firebase} />, document.getElementById('root'));
