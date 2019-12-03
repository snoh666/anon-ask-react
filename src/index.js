import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from './Firebase';


ReactDOM.render(<App firebase={firebase} />, document.getElementById('root'));
