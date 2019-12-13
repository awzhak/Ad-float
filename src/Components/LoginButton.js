import React, { useState } from 'react';
import User from './../modules/User'
import Button from 'react-bootstrap/Button'

function LoginButton() {
	const [username, setUsername] = useState();
  const [token, setToken] = useState();

  const user = new User();

  return (
    <Button onClick={user.Login}>Login</Button>
  );
}

export default LoginButton;
