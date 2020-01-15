import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Dbg from './Components/Dbg';
import Original_Navbar from './Components/Original_Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home'
import UserMypage from './Pages/UserMypage'
import EditProfile from './Pages/EditProfile'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Original_Navbar />
        <div
          style={{
            zIndex: -5
          }}
        >
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/mypage' exact component={UserMypage} />
            <Route path='/editprofile' component={EditProfile} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
