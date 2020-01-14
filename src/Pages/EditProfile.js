import React from 'react';

import { Avatar, Chip, Toolbar, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "20vh",
    maxWidth: 550
  }
}))


function EditProfile() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      a
    </div>
  );
}

export default EditProfile;