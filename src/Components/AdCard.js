import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setFooter } from "./../stores/rendering";

import ad from './ad.jpg';

import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

import { Card } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({

  cardbody: {
    marginTop: 0,
    margin: 20,
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
  */
  return(
    <Card>
      <img className={classes.cardimg} src={props.url}/>
      <div className={classes.cardbody}>
        <div>
          <Avatar className={classes.orange}>N</Avatar>
          <div className={classes.carduser}>
            <h6 className={classes.username}>aaa@89439</h6>
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
  );
}

export default AdCard;