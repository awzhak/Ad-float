import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./stores/";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'firebase/auth'

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


//BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root')
);

serviceWorker.unregister();
