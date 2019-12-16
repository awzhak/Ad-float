import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button'
import firebase from 'firebase/app';
import 'firebase/auth';
import { setName, clearName, setMail, clearMail, setIcon, clearIcon } from "./../stores/user";


function LoginButton() {

  const dispatch = useDispatch();
  const name = useSelector(state => state.name.name);
  const mail = useSelector(state => state.mail.mail);
  const icon = useSelector(state => state.icon.icon);

  function Login() {
    console.log("aa")
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      const user = result.additionalUserInfo.profile;
      console.log(user)

      dispatch(setName(user.name))
      dispatch(setMail(user.email))
      dispatch(setIcon(user.picture))

    }).catch(function(error) {
      console.log(error)
      console.log(error.message)
    })
  }

  function Logout() {
    firebase.auth().signOut().then(function() {
      dispatch(clearName())
      dispatch(clearMail())
      dispatch(clearIcon())

    }).catch(function(e){
      console.log(e);
    })
  }

  return (
    <>
      <h1>{name}</h1>
      <h1>{mail}</h1>
      <img src={icon}></img>
      <Button onClick={Login}>Login</Button>
      <Button onClick={Logout}>Logout</Button>
    </>
  );
}

export default LoginButton;
