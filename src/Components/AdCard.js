import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setFooter } from "./../stores/rendering";
import { db } from './../firebase/index'


import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

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
  }
}));

//ユーザーのid、募集idからそれを取得するコードをuseEffect書く
//文字数制限

function AdCard(props) {
  const classes = useStyles();
  /*
    propsにあるもの

    ユーザーアイコン
    ユーザーネーム
    ユーザーid

    作品のサムネイル
    タイトル
    説明
    元の案件
    投稿日時
    userIdからとってくる
  */
  const [userName, setUserName] = useState();
  const [userId, setUserId] = useState();
  const [userIcon, setUserIcon] = useState()
  
  useEffect(() => {
    db.collection('users').get().then(snapshot => {
      snapshot.forEach(doc => {
        if( props.userId === doc.id ){
          setUserName(doc.get('name'))
          setUserId(doc.get('userId'))
          setUserIcon(doc.get('icon'))
          console.log(doc.get('name'))
        }
      })
    })
  }, [props])
  
  const UserPageUrl = "/user/" + userId;

  return(
    <div className={classes.root}>
    <Card class="grid-item">
      <img className={classes.cardimg} src={props.url}/>
      <div className={classes.cardbody}>
        <div>
          <a href={UserPageUrl}>
            <Avatar className={classes.orange} src={userIcon}>N</Avatar>
          </a>
          <div className={classes.carduser}>
          <a href={UserPageUrl} style={{ color: 'black', textDecoration: 'none' }}>
            <h6 className={classes.username}>{userName}@{userId}</h6>
          </a>
          </div>
        </div>
        <h5 className={classes.cardtitle}>
          {props.title}
        </h5 >
        <Card.Text>
          {props.description}
        </Card.Text>
      </div>
      <Card.Footer>
        <small className="text-muted">{props.from}</small>
        <div className={classes.date}>
          <small className="text-muted">{props.timestamp.seconds}</small>
        </div>
      </Card.Footer>
    </Card>
    </div>
  );
}

export default AdCard;