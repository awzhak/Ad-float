import React from 'react';
import ProfileDetails from './../Components/ProfileDetails'
import LatestPosts from './../Components/LatestPosts'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
}))

function UserPage(props) {
  const classes = useStyles();

  const colors = [ 'Red', 'Blue', 'Black', 'Pink', 'Red', 'Blue', 'Black', 'Pink', 'Red', 'Blue', 'Black', 'Pink' ]

  return (
    <div className={classes.root}>
      <center>
        <ProfileDetails id={props.match.params.id}/>
        <Typography variant="h3" gutterBottom color='primary'>
          最新の投稿
        </Typography>
        <LatestPosts colors={colors}/>
      </center>
    </div>
  );
}

export default UserPage;
