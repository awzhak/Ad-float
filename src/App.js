import React, { useState ,useEffect } from 'react';
import Original_Navbar from './Components/Original_Navbar';
import Footer from './Components/Footer';
import NewProductionPost from './Components/NewProductionPost'

function App() {
  return (
    <div className="App">
      <Original_Navbar />
      <NewProductionPost />
    </div>
  );
}

export default App;



