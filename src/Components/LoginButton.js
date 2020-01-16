import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button'
import firebase from 'firebase/app';
import 'firebase/auth';
import { setName, clearName, setMail, clearMail, setIcon, clearIcon } from "./../stores/user";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  btn: {
    minWidth: '30px',
    margin: '4px'
  }
}))
function LoginButton() {
  const [ isauth, setIsauth ] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsauth(true)
      }
    })
  });

  const name = useSelector(state => state.name.name);
  const mail = useSelector(state => state.mail.mail);
  const icon = useSelector(state => state.icon.icon);

  function Login() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result) {
        const user = result.additionalUserInfo.profile;
        console.log(user)

        setIsauth(true)
        dispatch(setName(user.name))
        dispatch(setMail(user.email))
        dispatch(setIcon(user.photoURL))
  
      }).catch(function(error) {
        console.log(error)
        console.log(error.message)
      })

    })
    .catch(function(error) {
      console.log(error.code);
      console.log(error.message);
    });
  }

  function Logout() {
    firebase.auth().signOut().then(function() {
      setIsauth(false)
      dispatch(clearName())
      dispatch(clearMail())
      dispatch(clearIcon())
    }).catch(function(e){
      console.log(e);
    })
  }

  return (
    <>
      {!isauth ? (
        <Button className={classes.btn} onClick={Login}>Login</Button> 
        ):(
        <Button className={classes.btn} onClick={Logout}>Logout</Button>
      )
      }
    </>
  );
}

export default LoginButton;
