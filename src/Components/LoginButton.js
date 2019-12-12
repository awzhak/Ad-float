import React, { useState } from 'react';
import User from './../modules/User'
import Button from 'react-bootstrap/Button'

function LoginButton() {
	const [username, setUsername] = useState();
  const [token, setToken] = useState();

  return (
    <Button onClick={User.Login}>Login</Button>
  );
}

export default LoginButton;
