import React, { useEffect , useState} from 'react';
import {Card,Collapse,Row,Col} from 'react-bootstrap'; 
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'react-bootstrap/Image';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {useHistory, useParams} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import RecruitsAdCard from './RecruitsAdCard'



import {db} from '../firebase/index';
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  root: {
  },
  cardgrid: {
    width: 'auto',
    display: 'inline-block',
  },
  grid: {
    width: 'auto',
  },
  cardgrid: {
    margin: 30,
  }
}));

//プロフィールの紹介文コンポーネント
function Sentence(props){
  const [item,setItem] = useState('')
  const [date,setDate] = useState()

  const formId= props.id


  useEffect(() => {
    // ad接続
    const formRef = db.collection('form').doc(formId);
    formRef.get().then(docsnapshot => {
      setItem(docsnapshot.data())
      setDate(moment(docsnapshot.data().limit.toDate()).format('YYYY/MM/DD'))
    })
  },[])

  const Line_Left={
    fontSize:20,
    fontWeight:900,
    marginBottom:60
  };
  const Line_Right={
    fontSize:20
  };

  return(
    <div>
        <Row 
        style={{marginTop:50,
                marginLeft:70,
                marginRight:70,
              }}
        >
          <Col md={{ span: 1, offset: 11 }}>
            <Button variant="outlined" color="primary">
              編集
            </Button>
          </Col>
          <Col xs={12} md={5}>
            <Image  style={{ width: '100%', height: '100%'}} src={item.image}/>
          </Col>
          <Col xs={6} md={6}
          style={{marginTop:10}}
          >
            <Row>
              <Col md={4}>
                <p className="sen" style={Line_Left}>タイトル</p>
              </Col>
              <Col md={7} style={Line_Right}>
                <p>{item.title}</p>  
              </Col>
              <Col md={4}>
                <p className="sen" style={Line_Left}>募集団体</p>
              </Col>
              <Col md={7} style={Line_Right}>
                {item.company}
              </Col>
              <Col md={4}>
                <p className="sen" style={Line_Left}>募集期日</p>
              </Col>
              <Col md={7} style={Line_Right}>
                {date}
              </Col>
              <Col md={4}>
                <p className="sen" style={Line_Left}>報酬金範囲</p>
              </Col>
              <Col md={7} style={Line_Right}>
                {`¥${item.money}`}
              </Col>
            </Row>
          </Col>
          <Col md={12}>
            <center><p className="sen" style={{fontSize:20,fontWeight:900,whiteSpace: 'pre-line'}}>案件詳細</p></center>
          </Col>
          <Col style={{fontSize:20}}>
            {item.description}
          </Col>
        </Row>
    </div>
  );
}

//プロフィールメインのコンポーネント
export default function PersonProfile(props){
  const classes = useStyles();
  const history = useHistory();
  const formId = props.match.params.id
  const [posts, setPosts] = useState([]);
  const postIds = [];

  useEffect (() => {
    try {
      db.collection('ad').where('formId', '==', formId)
      .get().then(snapshot => {
        const pos = [];
        snapshot.forEach(doc => {
          pos.push(doc.data())
        })
        setPosts(pos)
      })
    } catch (e){
      console.log(e)
    }
  }, [])

  const Ads = posts.map((post) =>
    <RecruitsAdCard {...post}/>
  )

  return(
    <div>
      <Sentence id={formId}/>
      <br/>

      <center style={{fontSize:30,marginTop:60,fontWeight:900}}>
        投稿一覧
      </center>

      <div className={classes.cardgrid}>
        <div class="grid" data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth": 30 }'>
          <Grid
            className={classes.grid}
            container spacing={3}
            justify="center"
            alignItems="center"
          >
            {Ads}
          </Grid>
        </div>
      </div>

      <div style={{textAlign:'right'}}>
          <Fab
            onClick={() => history.push('/NewProductionPost/' + props.id)}
            style={{marginBottom:30, color:"blue"}} 
            aria-label="add"
          >
            <AddIcon />
          </Fab>
      </div>
    </div>
  );
}