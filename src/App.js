import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import firebase from 'firebase/app';
import { setUid, setName, setMail, setIcon } from "./stores/user";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dbg from './Components/Dbg';
import Original_Navbar from './Components/Original_Navbar';
import Footer from './Components/Footer';
import AdCard from './Components/AdCard';
import Home from './Pages/Home';
import UserPage from './Pages/UserPage';
import EditProfileDetails from './Pages/EditProfileDetails';

import { Button } from 'react-bootstrap'



function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUid(user.uid))
        dispatch(setName(user.name))
        dispatch(setMail(user.email))
        dispatch(setIcon(user.photoURL))
      }
    })
  });

  
  return (
    <div className="App">
      <BrowserRouter>
        <Original_Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/user/:id' component={UserPage} />
            <Route path='/user/:id/edit' exact component={EditProfileDetails} />
            <Route path='/adcard' exact component={AdCard} />
          </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
