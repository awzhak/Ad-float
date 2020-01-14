import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import LoginButton from './Components/LoginButton';
import Dbg from './Components/Dbg';
import Footer from './Components/Footer';
import Home from './Pages/Home'
import UserMypage from './Pages/UserMypage'
import EditProfile from './Pages/EditProfile'


import firebase from 'firebase';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/mypage' exact component={UserMypage} />
          <Route path='/editprofile' component={EditProfile} />
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
