import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { Avatar, Chip, Toolbar, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

import { db } from './../firebase/index'
import { sleepy } from 'react-icons-kit/icomoon';


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

function ProfileDetails(props) {
  const classes = useStyles();

  const [ propid, setPropid ] = useState(props.id);
  const [ company, setCompany ] = useState();
  const [ name, setName ] = useState();
  const [ id, setId ] = useState();
  const [ icon, setIcon ] = useState();
  const [ job, setJob ] = useState();
  const [ skills, setSkills ] = useState(['']);
  const [ like, setLike ] = useState();
  const [ details, setDetails ] = useState();
  const [ posts, setPosts ] = useState();
  
  useEffect(() => {
    try {
      const UserRef = db.collection('users').where('userId', '==', parseInt(propid))
      UserRef.get().then(function(snapshot){
        snapshot.forEach(function(doc){
          const user = doc.data();
          setCompany(user.company)
          setName(user.name)
          setId(user.userId)
          setIcon(user.icon)
          setJob(user.job)
          setSkills(user.skills)
          setLike(user.like)
          setDetails(user.introduction)
          setPosts(user.posts)
        }
        )})
    } catch(err) {
      console.log(`Error: ${JSON.stringify(err)}`)
    }
  },[propid]);

  const putSkills = skills.map((skill, index) => 
    <Chip label={skill} variant="outlined" />
  )


  return (
    <div className={classes.root}>
      <center>
        <Avatar className={classes.orange} src={icon}>M</Avatar>
      </center>
      <TableContainer component={Paper}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" id="tableTitle">
          <center>{name}</center>
          </Typography>
        </Toolbar>
        <Table className={classes.table}>
          <TableBody>

          <TableRow>
            <TableCell className={classes.thcell} align="center">id</TableCell>
            <TableCell className={classes.cell} align="right">{id}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.thcell} align="center">職業</TableCell>
            <TableCell className={classes.cell} align="right">{job}</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className={classes.thcell} align="center">Skill</TableCell>
            <TableCell className={classes.cell} align="right">
            {putSkills}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.thcell} align="center">いいね</TableCell>
            <TableCell className={classes.cell} align="right">{like}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.thcell} align="center">詳細</TableCell>
            <TableCell className={classes.cell} align="right">{details}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.thcell} align="center"></TableCell>
            <TableCell className={classes.cell} align="right">
              <Link to='editprofile'>編集</Link>
            </TableCell>
          </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProfileDetails;
