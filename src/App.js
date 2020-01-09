import React, { useState } from 'react';
import Original_Navbar from './Componets/Original_Navbar';
import Footer from './Componets/Footer';
import Notice from './Components/Notice';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// firebase
// import firebase from 'firebase/app';
// //import firestore from 'firebase/firestore';
// //import config from './firebase-config.js';

// firebase.initializeApp(config);
// const db = firebase.firestore();
// const collection = db.collection('user');

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function App () {
  const classes = useStyles();

  const [count,setCount] = useState(0);
  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" onClick={() => setCount(count + 1)}>
        Secondary
      </Button>
  <p>{count}</p>
    </div>
  );
}


export default App;
