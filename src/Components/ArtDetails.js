import React, { useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {db} from '../firebase/index';
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  card: {
    margin: '30px auto',
    maxWidth: 800,
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
}));

export default function ArtDetails(){
  // アイコンフラグ
  const [flag, setFlag] = useState()
  const [item,setItem] = useState({})
  const [user,setUser] = useState({})
  const [date,setDate] = useState({})
  const [id,setId] = useState()
  const adId = '28rb8b1fcdPytQZw8ciB';
  const userId = 'Wisga4vfNOCkXjGjQNhe';
  const likeId = '4U9dY8k9orn18F9IO2AR';


  useEffect(() => {
    // ad接続
    const adRef = db.collection('ad').doc(adId);
    adRef.get().then(docsnapshot => {
      setItem(docsnapshot.data())
      setDate(moment(docsnapshot.data().timestamp.toDate()).format('YYYY/MM/DD'))
      const userRef = db.collection('users').doc(docsnapshot.data().userId);
      userRef.get().then(snapshot => {
        setUser(snapshot.data())
      })
    })
    //liked接続
    const likeRef = db.collection('liked').where('adId', '==', adId).where('userId', '==', userId);
    likeRef.get().then(snapshot => {
      if(snapshot.empty) {
        // ドキュメントに一致なし
        setFlag(true)
      } else {
        // ドキュメントに一致
        setFlag(false)
      }
    })

  },[])
  
  const handleClickAdd = (event) => {
    const likeRef = db.collection('liked').add({
      adId: adId,
      userId: userId
    })
    setFlag(false)
  }

  const handleClickDel = (event) => {
    const likeRef = db.collection('liked').where('adId', '==', adId).where('userId', '==', userId);
    likeRef.get().then(snapshot => {
        setFlag(false)
        snapshot.forEach(doc => {
          console.log(doc.id)
          const likeDefRef = db.collection('liked').doc(doc.id).delete()
          setFlag(true)
        })
    })
  }

  const classes = useStyles();
  return(
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              G
            </Avatar>
          }
          title={item.title}
          subheader={`投稿日${date}`}
        />
        <CardMedia
          className={classes.media}
          image={item.url}
          title="Paella dish"
        />
        <CardContent>
          <p align="left" style={{fontSize:25}}>説明</p>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" className={classes.expand}>
            {flag ?
              <FavoriteBorderIcon fontSize="large"
                 onClick={(e) => handleClickAdd(e)}
              />:
              <FavoriteIcon fontSize="large"
                color="secondary"
                onClick={(e) => handleClickDel(e)}
              />
            }
          </IconButton>
        </CardActions>
      </Card>
  );
}