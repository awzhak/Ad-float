import React from 'react';

import { Avatar, Chip, Toolbar, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "20vh",
    maxWidth: 550
  },
  table: {
    minWidth: 250
  },
  thcell: {
    paddingLeft: 0
  },
  cell: {
    paddingRight: 25
  },
  title: {
    flex: '1 1 100%',
  },
  orange: {
    marginBottom: 20,
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: 0
  }
}))

function ProfileDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <center>
        <Avatar className={classes.orange}>M</Avatar>
      </center>
      <TableContainer component={Paper}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" id="tableTitle">
          <center>
            169z87mn
          </center>
          </Typography>
        </Toolbar>
        <Table className={classes.table}>
          <TableBody>

          <TableRow>
            <TableCell className={classes.thcell} align="center">id</TableCell>
            <TableCell className={classes.cell} align="right">169z87mn</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.thcell} align="center">職業</TableCell>
            <TableCell className={classes.cell} align="right">学生</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className={classes.thcell} align="center">Skill</TableCell>
            <TableCell className={classes.cell} align="right"><Chip label="aaa" variant="outlined" /><Chip label="aaa" variant="outlined" /><Chip label="aaa" variant="outlined" /><br></br><Chip label="aaa" variant="outlined" /><Chip label="aaa" variant="outlined" /><Chip label="aaa" variant="outlined" /></TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.thcell} align="center">いいね</TableCell>
            <TableCell className={classes.cell} align="right">99130</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.thcell} align="center">詳細</TableCell>
            <TableCell className={classes.cell} align="right">わたしは大崎甘奈</TableCell>
          </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProfileDetails;
