/* eslint-disable no-unused-vars */
/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { db } from './../firebase/index'

import AdCard from './AdCard';
import RecruitCard from './RecruitCard';

import { Card, Button } from 'react-bootstrap'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

function LatestPosts(props) {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    switch(props.page) {
      case "home":
        const dbposts = [];
        db.collection('ad').orderBy("timestamp", "desc").get().then(snapshot => {
          snapshot.forEach(doc => {
            const post = [];
            post.push(doc.id)
            post.push(doc.data())
            dbposts.push(post)
            console.log(dbposts)
          })
          setPosts(dbposts);
        })
        break;
      case "posts":
        const adposts = [];
        db.collection('ad').orderBy("timestamp", "desc").get().then(snapshot => {
          snapshot.forEach(doc => {
            const post = [];
            post.push(doc.id)
            post.push(doc.data())
            adposts.push(post)
            console.log(adposts)
          })
          setPosts(adposts);
        })
        break;
      case "projects":
        db.collection('form').orderBy("timestamp", "desc").limit(3).onSnapshot(coll => {
          const formposts = [];
          coll.forEach(doc => {
            let data = doc.data() // 募集情報
            data.id = doc.id      // 募集のID
            formposts.push(data)
            console.log(formposts)
          })
          setPosts(formposts)
        })
        break;
      case "ranking":
        const dbposts2 = [];
        db.collection('ad').orderBy("likecount", "desc").get().then(snapshot => {
          snapshot.forEach(doc => {
            const post2 = [];
            post2.push(doc.id)
            post2.push(doc.data())
            dbposts2.push(post2)
            console.log(dbposts2)
          })
          setPosts(dbposts2);
        })
        break;
    }
  },[props.page])

  const latestposts = posts.map((post) =>
    <div className={classes.root} class="grid-item">
      {
        props.page === 'home' ? <AdCard {...post}/>:
        props.page === 'projects' ? <RecruitCard {...post} /> :
        props.page === 'ranking' ? <AdCard {...post}/> :
        props.page === 'posts' ? <AdCard {...post}/> : ''
      }
    </div>
  );

  return (
    <div className={classes.cardgrid}>
      <div class="grid" data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth": 30 }'>
      <Grid
        className={classes.grid}
        container spacing={3}
        justify="center"
        alignItems="center"
      >
        {latestposts}
        </Grid>
      </div>
    </div>
  );
}

export default LatestPosts;