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
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';
import ScrollToTopOnMount from './ScrollToTopOnMount'

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {useHistory, useParams,} from 'react-router-dom';


// firebase
import {db} from '../firebase/index'
import moment from 'moment'


const useStyles = makeStyles(theme => ({
  root: {
  },
  card: {
    maxWidth: 'auto',
    margin: '20px',
    width: '260px',
    height: '400px',
    textAlign: 'left',
  },
  media: {
    height: 0,
    paddingTop: '75.25%', // 16:9
  },
  avatar: {
    backgroundColor: lightBlue[500],
  },
}));


export default function RecruitCard(props) {
  // formId 受け取り
  const classes = useStyles();
  // 投稿者情報
  const [user, setUser] = useState({})
  // 日付
  const [date, setDate] = useState()
  // ロードフラグ
  const [load, setLoad] = useState(true)
  // ルーター
  // const { formId } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
        try {
            console.log(load)
            const userRef = await db.collection('users').doc(props.userId);
            const ref = await userRef.get().then(docsnapshot => {
                setUser(docsnapshot.data())
                setDate(moment(props.timestamp.toDate()).format('YYYY/MM/DD'))
            })
            setLoad(false);
        } catch(e) {
            console.error(e);
        }
    };
    fetchData();
    console.log(props.formId)
  },[])


  return (
    <div className={classes.root}>
      <ScrollToTopOnMount />
        {load ? <CircularProgress /> :
        <Slide direction="up" in={user} mountOnEnter unmountOnExit>
        <Card className={classes.card}>
          <CardHeader
            avatar={
               <Avatar aria-label="recipe" className={classes.avatar}>
                {props.postcount}
              </Avatar>
            }
            title={props.title}
            subheader={`掲載日:${date}`}
          />
          {/* 募集詳細画面のパス */}
          <Link href={`/NewProductionPost/${props.id}`}　onClick={() => history.push(`/NewProductionPost/${props.id}`)}>
          <CardMedia
            className={classes.media}
            image={props.image}
            title=""
          />
          </Link>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
          <CardHeader
            avatar={
              <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src={user.icon}
              />
            }
            title={props.company}
            subheader={user.name}
          />
        </Card>
        </Slide>
        }
    
    </div>
  );
 }