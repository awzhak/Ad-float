import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app'
import { db } from './../firebase/index'
import moment from 'moment'

import { Avatar, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  rootnoroot: {
    textAlign: 'center', 
    marginTop: 30,
    marginBottom: 30,
  },
  root : {
    width: '60rem',
    display: 'inline-block'
  },
  cardbody: {
    margin: 15,
  },
  cardimg: {
    width: '100%',
    borderBottom: '1px rgba(0,0,0,.125) solid'
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
  const id = props.match.params.id;
  const classes = useStyles();

  //ad
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [url, setUrl] = useState();
  const [date, setDate] = useState();
  const [like, setLike] = useState(0);

  //User
  const [uid, setUid] = useState();
  const [userName, setUserName] = useState();
  const [userId, setUserId] = useState();
  const [userIcon, setUserIcon] = useState();
  //元の案件
  const [projectName, setProjectName] = useState();
  const [projectUrl, setProjectUrl] = useState();
  useEffect(() => {
    async function fetch(){
      try {
        const AdRef = await db.collection('ad').doc(id)
        AdRef.get().then(snapshot => {
          setUid(snapshot.get('userId'))
          setTitle(snapshot.get('title'))
          setDescription(snapshot.get('setDescription'))
          setUrl(snapshot.get('url'))
          setDate(moment(snapshot.get('timestamp').toDate()).format('YYYY/MM/DD'))
          setLike(snapshot.get('likecount'))
          setProjectUrl(snapshot.get('formId'))
          db.collection('form').doc(snapshot.get('formId')).get().then(ss => {
            setProjectName(ss.get('title'))
          })
          db.collection('users').doc(snapshot.get('userId'))
          .get().then(snapshot => {
            setUserName(snapshot.get('name'));
            setUserId(snapshot.get('userId'));
            setUserIcon(snapshot.get('icon'));
          })
        })
      } catch (e){
        console.log(e);
      }
    }
    fetch();
  },[props])

  useEffect(() => {
    const likeRef = db.collection('ad').doc(id)
      likeRef.onSnapshot(snapshot => {
        setLike(snapshot.get('likecount'))
      })
  }, [like])

  const liked = () => {
    const adRef = db.collection('ad').doc(id)
    adRef.update({
      likecount: firebase.firestore.FieldValue.increment(1.0)
    })
  }
  
  const UserPageUrl = "/user/" + userId;
  const ProjectUrl = "/projects/" + projectUrl;

  return(
    <div className={classes.rootnoroot}>
    <div className={classes.root}>
    <Card class="grid-item">
      <img className={classes.cardimg} src={url}/>
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
        <h5 className={classes.cardtitle}>
          {title}
        </h5 >
        <Card.Text>
          {description}
        </Card.Text>
        <div className={classes.likefooter}>
          いいね！&nbsp;
          <Fab size="small"><FavoriteIcon color="secondary" onClick={liked}/></Fab>
          <span className={classes.likecount} >{like}</span>
        </div>
      </div>
      <Card.Footer style={{textAlign:'left'}}>
        <a href={ProjectUrl} style={{ textDecoration: 'none' }}>
          <small className="text-muted">{projectName}</small>
        </a>
        <div className={classes.date}>
          <small className="text-muted">投稿日時&nbsp;:&nbsp;{date}</small>
        </div>
      </Card.Footer>
    </Card>
    </div>
    </div>
  );
}
