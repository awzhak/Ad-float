/* eslint-disable no-unused-vars */
/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { db } from './../index'

import AdCard from './AdCard';

import { Card, Button } from 'react-bootstrap'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '17rem',
    margin: 0,
  },
  cardgrid: {
    width: 'auto',
    textAlign: "center",
    margin: 30,
  }
}));

function LatestPosts(props) {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    switch(props.page) {
      case "home":
        const dbposts = [];
        const adRef = db.collection('ad').orderBy("timestamp", "desc").get().then(snapshot => {
          snapshot.forEach(doc => {
            dbposts.push(doc.data())
            console.log(doc.data())
          })
          setPosts(dbposts);
        })
        break;
      case "posts":
        break;
      case "projects":
        break;
      case "ranking":
        break;
    }
  },[props.page])


  const classes = useStyles();

  const latestposts = posts.map((post) =>
    <div className={classes.root} class="grid-item">
      <AdCard {...post}/>
    </div>
  );
    
  return (
    <div className={classes.cardgrid}>
      <div class="grid js-masonry" data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth": 30 }'>
        {latestposts}
      </div>
    </div>
  );
}
  
export default LatestPosts;