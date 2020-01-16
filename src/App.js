import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import firebase from 'firebase/app';
import { setName, setMail, setIcon } from "./stores/user";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dbg from './Components/Dbg';
import Original_Navbar from './Components/Original_Navbar';
import Footer from './Components/Footer';
import AdCard from './Components/AdCard';
import Home from './Pages/Home';
import UserMypage from './Pages/UserMypage';
import EditProfile from './Pages/EditProfile';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setName(user.name))
        dispatch(setMail(user.email))
        dispatch(setIcon(user.photoURL))
      }
      else {
        
      }
    })
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Original_Navbar/>
        <Dbg />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/mypage' exact component={UserMypage} />
            <Route path='/editprofile' component={EditProfile} />
            <Route path='/adcard' component={AdCard} />
          </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
