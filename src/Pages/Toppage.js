import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// ルーター
import {useHistory} from 'react-router-dom';
// アイコン
import AssignmentIcon from '@material-ui/icons/Assignment';
import BrushIcon from '@material-ui/icons/Brush';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { green, lightBlue, pink } from '@material-ui/core/colors'; 
// アバター
import Avatar from '@material-ui/core/Avatar';
import logo from './../adfloat_logo.png'

const useStyles = makeStyles(theme => ({
  root: {
  },
  cardroot: {
  },
  image: {
    width: 500,
    height: 250,
    margin: 20,
},
 card: {
    minWidth: 275,
    width:200,
    display: 'inline-block',
    margin: 10,
  },
  avatar: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: 20,
  },
  icon: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  body: {
    textAlign: "left",
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SimpleCard({onClick}) {
  const classes = useStyles();
  const history = useHistory();

  return (
      <div className={classes.root}>
        <img className={classes.image} src={logo}  alt="アイコン" />
        <div className={classes.cardroot}>
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                広告を募集しよう！
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Let's recruit advertisements!
                </Typography>
                <Avatar className={classes.avatar} style={{color: '#fff',backgroundColor: green[500],}}>
                    <AssignmentIcon className={classes.icon}/>
                </Avatar>
                <Typography className={classes.body} variant="body2" component="p">
                AdFloatはあなたのマーケティングを助けます！
                募集を行うことで、ユーザーがユニークな
                アイデアで広告をデザインしてくれます！
                宣伝を低コストかつ効果的に行うことが出来ます
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                 variant="contained"
                 color="primary"
                 size="small"
                 onClick={() => history.push('/')}//募集投稿画面のパス
                 >Let's recruit
                </Button>
            </CardActions>
        </Card>

        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                広告をデザイン！
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Let's design advertisements!
                </Typography>
                <Avatar className={classes.avatar} style={{color: '#fff',backgroundColor: pink[500]}}>
                    <BrushIcon className={classes.icon}/>
                </Avatar>
                <Typography className={classes.body} variant="body2" component="p">
                デザインの勉強やマーケティングに興味があれば募集を見にいきましょう！興味のある募集にデザインを投稿することで消費者の反応を確認できます！
                {'あなたのセンスを試してみましょう'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                variant="contained"
                color="primary"
                onClick={(event) => onClick(event,3)} // 募集タブに移動
                size="small">Let's design</Button>
            </CardActions>
        </Card>

        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                評価しよう！
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Let's Like advertisements!
                </Typography>
                <Avatar className={classes.avatar} style={{color: '#fff',backgroundColor: lightBlue[500],}}>
                    <ThumbUpAltIcon className={classes.icon}/>
                </Avatar>
                <Typography className={classes.body} variant="body2" component="p">
                Home画面ではユーザーが投稿した広告が表示されます！様々なジャンルの広告が集まるのであなたの興味の幅を広げることもあるでしょう。そんなときはそのデザインにLIKEしましょう
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained"
                color="primary"
                onClick={(event) => onClick(event,2)}
                size="small">Let's Like</Button>
            </CardActions>
        </Card>
        </div>
      </div>
  );
}