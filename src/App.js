import React from 'react';
import LoginButton from './Components/LoginButton';
import Footer from './Components/Footer';
import Home from './Pages/Home'
import UserMypage from './Pages/UserMypage'

import firebase from 'firebase';

function App() {

  return (
    <div className="App">
      <UserMypage></UserMypage>
      <Footer></Footer>
    </div>
  );
}

export default App;
