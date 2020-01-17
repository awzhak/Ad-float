import React, { useState ,useEffect } from 'react';
import Original_Navbar from './Componets/Original_Navbar';
import Footer from './Componets/Footer';
import Notice from './Components/Notice';
import Dm from './Components/Dm';
import List from './Components/List';
import NewPost from './Components/Newpost'

function App() {
  return (
    <div className="App">
      <Original_Navbar />
      <NewPost />
    </div>
  );
}

export default App;



