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
import Button from '@material-ui/core/Button';

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
    width: '320px',
    height: 'auto',
    textAlign: 'left',
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
  maney: {
    padding:0,
  },
  expand: {
    width: 500,
    transform: 'rotate(0deg)',
    margin: '0px auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: lightBlue[500],
  },
}));


export default function RecruitCard(props) {
  const classes = useStyles();
  // 投稿者情報
  const [user, setUser] = useState({})
  // 日付
  const [date, setDate] = useState()
  const [limit, setLimit] = useState()
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
                setLimit(moment(props.limit.toDate()).format('YYYY/MM/DD'))
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
            subheader={`期限日:${date}～${limit}`}
          />
          {/* 募集詳細画面のパス */}
          <Link href={`/NewProductionPost/${props.id}`}　onClick={() => history.push(`/NewProductionPost/${props.id}`)}>
          <CardMedia
            className={classes.media}
            image={props.image}
            title=""
          />
          </Link>
          <CardContent className={classes.text} >
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </CardContent>
          <CardHeader
            className={classes.text2}
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
          <CardActions className={classes.maney}>
            <Button 
            className={classes.expand}
            size="small"
            variant="contained"
            color="primary">
              {`¥${props.money}`}
            </Button>
          </CardActions>
        </Card>
        </Slide>
        }
    </div>
  );
 }