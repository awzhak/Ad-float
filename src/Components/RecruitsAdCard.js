import React, { useState, useEffect } from 'react';
import { db } from './../firebase/index'
import moment from 'moment'

import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Card } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
  root : {
    width: '17rem',
    display: 'inline-block',
    padding: '5px'
  },
  cardbody: {
    margin: 15,
  },
  cardimg: {
    width: '100%',
    maxHeight: '200px',
    minHeight: '200px',
    objectFit: 'cover'
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(5.5),
    height: theme.spacing(5.5),
    float: 'left',
  },
  carduser: {
    paddingTop: '11px',
    marginLeft: '55px',
    marginBottom: '20px'
  },
  username: {
    margin: 0
  },
  cardtitle: {

  },
  date: {
    float: 'right',
  },
  likefooter: {
    textAlign: 'right',
  },
  likecount: {
    marginLeft: '5px'
  }
}));

//文字数制限

export default function RecruitsAdCard (props){
  const classes = useStyles();
  
  //User
  const [userName, setUserName] = useState();
  const [userId, setUserId] = useState();
  const [userIcon, setUserIcon] = useState();
  
  //元の案件
  const [projectName, setProjectName] = useState();
  const [projectUrl, setProjectUrl] = useState();
  
  useEffect(() => {
    try {
      db.collection('users').doc(props.userId).get().then(doc => {
        setUserName(doc.get('name'));
        setUserId(doc.get('userId'));
        setUserIcon(doc.get('icon'));
      })
      db.collection('form').doc(props.formId).get().then(snapshot => {
        setProjectName( snapshot.get('title'));
        setProjectUrl(props.formId);
      })
    } catch (e){
      console.log(e);
    }
  },[])
  
  const AdUrl = "/adposts/" + props.id;
  const UserPageUrl = "/user/" + userId;
  const ProjectUrl = "/projects/" + projectUrl;

  return(
    <div className={classes.root}>
    <Card class="grid-item">
      <a href={AdUrl}>
        <img className={classes.cardimg} src={props.url}/>
      </a>
      <div className={classes.cardbody}>
        <div>
          <a href={UserPageUrl}>
            <Avatar className={classes.orange} src={userIcon}>N</Avatar>
          </a>
          <div className={classes.carduser}>
          <a href={UserPageUrl} style={{ color: 'black', textDecoration: 'none' }}>
            <h6 className={classes.username}>{userName}<small className="text-muted">@{userId}</small></h6>
          </a>
          </div>
        </div>
        <a href={AdUrl} style={{ color: 'black', textDecoration: 'none' }}>
          <h5 className={classes.cardtitle}>
            {props.title}
          </h5 >
        </a>
        <Card.Text>
          {props.description}
        </Card.Text>
        <div className={classes.likefooter}>
          <FavoriteIcon color="secondary" />
          <span className={classes.likecount}>{props.likecount}</span>
        </div>
      </div>
      <Card.Footer>
        <a href={ProjectUrl} style={{ textDecoration: 'none' }}>
          <small className="text-muted">{projectName}</small>
        </a>
        <div className={classes.date}>
          <a href={AdUrl} style={{ textDecoration: 'none' }}>
            <small className="text-muted">{moment(props.timestamp.toDate()).format('YYYY/MM/DD')}</small>
          </a>
        </div>
      </Card.Footer>
    </Card>
    </div>
  );
}
