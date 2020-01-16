import React from 'react';
import ad from './ad.jpg';

import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

import { Card } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
  cardbody: {
    marginTop: 0,
    margin: 20
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
    <Card style={{ width: '20rem' }}>
      <img className={classes.cardimg} src={ad}/>
      <div className={classes.cardbody}>
        <div>
          <Avatar className={classes.orange}>N</Avatar>
          <div className={classes.carduser}>
            <h6 className={classes.username}>aaa@89439</h6>
          </div>
        </div>
        <h5 className={classes.cardtitle}>
          aaaaa
        </h5 >
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </div>
      <Card.Footer>
        <small className="text-muted">元の案件～～～～～</small>
        <div className={classes.date}>
          <small className="text-muted">2020/01/22</small>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default AdCard;