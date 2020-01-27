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
import NewProductionPost from './Components/NewProductionPost';
import ArtDetails from './Components/ArtDetails'
import PersonalProfile from './Components/PersonalProfile'
import PersonalProfileEdit from './Components/PersonalProfileEdit'
import CompanyPost from './Components/CompanyPost'

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
            <Route path='/projectpost' exact component={CompanyPost} />
            <Route path='/adposts/:id' component={ArtDetails} />
            <Route path='/NewProductionPost/:id' component={NewProductionPost} />
            <Route path='/projects/:id' component={PersonalProfile} />
            <Route path='/projects/:id/edit' component={PersonalProfileEdit} />
          </Switch>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;