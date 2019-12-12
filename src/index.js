import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app'
import 'firebase/auth'

//BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';

//firebase
const firebaseConfig = {
    apiKey: "AIzaSyARvK9zX7nleYdflDo7Pn4uK6xovk4vyiw",
    authDomain: "adfloat-6b34d.firebaseapp.com",
    databaseURL: "https://adfloat-6b34d.firebaseio.com",
    projectId: "adfloat-6b34d",
    storageBucket: "adfloat-6b34d.appspot.com",
    messagingSenderId: "288318652594",
    appId: "1:288318652594:web:bdf0e5ac1a60740b1809ab",
    measurementId: "G-Y6FX1ZLKWC"
};
firebase.initializeApp(firebaseConfig)



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
