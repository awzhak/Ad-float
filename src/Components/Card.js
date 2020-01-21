import React, { useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import logo from './132-1200x899.png'
// firebase
import {db} from '../firebase/index'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 'auto',
    margin: '20px auto',
    width: '400px',
    height: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function RecipeReviewCard() {
  // formId 受け取り
  const formId = 'Ic9HRa5Dy6zpDH0btH0s';

  const classes = useStyles();
  // 募集情報
  const [Item, setItem] = useState({})
  // 日付
  const[date, setDate] = useState({})


  useEffect(() => {
    const formRef = db.collection('form').doc(formId);
    console.log(formRef)
    formRef.get().then(docsnapshot => {
      console.log(docsnapshot.data().time.toDate())
      setItem(docsnapshot.data())
      setDate(docsnapshot.data().time.toDate())
    })
  },[])


  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={Item.title}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={logo}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Item.description}
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            M
          </Avatar>
        }
        title="投稿者"
        subheader="ユーザーID"
      />
    </Card>
  );
        }