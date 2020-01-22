import React, { useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// firebase
import {db} from '../firebase/index'
import moment from 'moment'


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
  // 投稿者情報
  const [user, setUser] = useState({})
  // 日付
  const[date, setDate] = useState()

  useEffect(() => {
    // 募集情報
    const formRef = db.collection('form').doc(formId);
    console.log(formRef)
    formRef.get().then(docsnapshot => {
      // 募集情報セット
      setItem(docsnapshot.data())
      setDate(moment(docsnapshot.data().time.toDate()).format('YYYY/MM/DD'))
      // 募集投稿ユーザー情報
      const userRef = db.collection('users').doc(docsnapshot.data().userId);
      userRef.get().then(snapshot => {
        setUser(snapshot.data())
      })
    })
  },[])


  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {Item.postcount}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={Item.title}
        subheader={`掲載日:${date}`}
      />
      <CardMedia
        className={classes.media}
        image={Item.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Item.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" className={classes.expand}>
          <ShareIcon />
           
        </IconButton>
      </CardActions>


      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            M
          </Avatar>
        }
        title="投稿者"
        subheader={user.name}
      />
    </Card>
  );
        }