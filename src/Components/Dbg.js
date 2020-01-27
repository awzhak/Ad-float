import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

export default function Dbg() {
  return(
    <>
      <ui>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/user'>mypage</Link></li>
        <li><Link to='/editprofile'>editprofile</Link></li>
        <li><Link to='/adcard'>adcard</Link></li>
      </ui>
    </>
  );
}