import React, { useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { lightBlue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';

// firebase
import {db} from '../firebase/index'
import moment from 'moment'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 'auto',
    margin: '20px auto',
    width: '320px',
    height: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '75.25%', // 16:9
  },
  text: {
    paddingBottom: 0,
    height: 80,
  },
  text2: {
    paddingBottom: 7,
    paddingTop: 5,
  },
  money: {
    padding:0,
  },
  expand: {
    width: 500,
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: lightBlue[50],
  },
  post: {
    backgroundColor: lightBlue[500],
  },
}));


export default function RecipeReviewCard(props) {
  // formId 受け取り
  const formId = props.formId;  // props.formId
  const classes = useStyles();
  // 募集情報
  const [Item, setItem] = useState({})
  // 投稿者情報
  const [user, setUser] = useState({})
  // 日付
  const[date, setDate] = useState()
  const [limit, setLimit] = useState()

  useEffect(() => {
    // 募集情報
    const formRef = db.collection('form').doc(formId);
    console.log(formRef)
    formRef.get().then(docsnapshot => {
      // 募集情報セット
      setItem(docsnapshot.data())
      setDate(moment(docsnapshot.data().timestamp.toDate()).format('YYYY/MM/DD'))
      setLimit(moment(docsnapshot.data().limit.toDate()).format('YYYY/MM/DD'))
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
          <Avatar aria-label="recipe" className={classes.post}>
            {Item.postcount}
          </Avatar>
        }
        title={Item.title}
        subheader={`期限日:${date}～${limit}`}
      />
      <CardMedia
        className={classes.media}
        image={Item.image}
        title=""
      />
      {/* <CardContent className={classes.text}>
        <Typography variant="body2" component="p">
          {Item.description}
        </Typography>
      </CardContent> */}
      <CardHeader
      // className={classes.text2}
        avatar={
          <Avatar
          aria-label="recipe"
          className={classes.avatar}
          src={user.icon}
          />
        }
        title={Item.company}
        subheader={user.name}
      />
      <CardActions className={classes.money}>
            <Button
            className={classes.expand}
            size="small"
            variant="contained"
            color="primary">
              {`¥${Item.money}`}
            </Button>
          </CardActions>
    </Card>
  );
        }

    // adId userId
    // const adId = '28rb8b1fcdPytQZw8ciB';
    // const userId = 'Wisga4vfNOCkXjGjQNhe';
    // いいねDB
    // const likeRef = db.collection('liked').where('adId', '==', adId).where('userId', '==', userId);
    // likeRef.get().then(snapshot => {
    //     if(snapshot.empty) {
    //       // ドキュメントに一致なし
    //       console.log('No matching documents.');
    //     } else {
    //       // ドキュメントに一致
    //       snapshot.forEach(doc => {
    //         console.log(doc.id,doc.data())
    //       })
    //     }
    // })
    // .catch(err => {
    //   console.log('Error getting documents', err);
    // });

    // likeしたときに広告側にもincrementする
    // handleClick() = () => {
    //   const adRef = db.collection('ad').doc(adId)
    //   adRef.update({
    //     likecount: firebase.firestore.FieldValue.increment(1.0)
    //   })
    // }

    // likeを外した時に広告側にもdecrementする
    // handleClick() = () => {
    //   const adRef = db.collection('ad').doc(adId)
    //   const likeRef = db.collection('ad').doc(adId)
    //   adRef.update({
    //     likecount: firebase.firestore.FieldValue.increment(-1)
    //   })
    //   like情報の削除
    //   likeRef.delete()
    // }