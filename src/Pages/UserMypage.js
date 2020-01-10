import React from 'react';
import ProfileDetails from '../Components/ProfileDetails'
import LatestPosts from '../Components/LatestPosts'

import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
}))

function UserMypage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <center>
        <ProfileDetails></ProfileDetails>
        <LatestPosts></LatestPosts>
      </center>
    </div>
  );
}

export default UserMypage;
