import React, { useState ,useEffect } from 'react';
import Original_Navbar from './Componets/Original_Navbar';
import Footer from './Componets/Footer';
import Notice from './Components/Notice';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// firebase
import {db} from './firebase/index'
import axios from 'axios'


function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    let adref = db.collection('ad');
    adref.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let ref = doc.data().path
        console.log(ref)
        ref.get().then(docsnapshot => {
          console.log(docsnapshot.data().title)
          setData(docsnapshot.data().description)
        })
      })
    })
  },[])

  return (
    <div className="App">
      <p>Hello</p>
      {data}
    </div>
  );
}

export default App;



