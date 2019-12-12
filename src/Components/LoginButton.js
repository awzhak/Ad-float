import React, { useState } from 'react';
import a from 'react-bootstrap'
import firebase from './../firebase'
import User from './../modules/User'
import Button from 'react-bootstrap/Button'

const user = new User();

function LoginButton() {
	const [username, setUsername] = useState();
  const [token, setToken] = useState();

  return (
    <Button onClick={user.Login}>Login</Button>
  );
}

export default LoginButton;
