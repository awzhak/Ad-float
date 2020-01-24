/* eslint-disable no-unused-vars */
/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { db } from './../firebase/index'

import AdCard from './AdCard';

import { Card, Button } from 'react-bootstrap'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardgrid: {
    margin: 30,
  }
}));

function LatestPosts(props) {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    switch(props.page) {
      case "home":
        const dbposts = [];
        db.collection('ad').orderBy("timestamp", "desc").get().then(snapshot => {
          snapshot.forEach(doc => {
            dbposts.push(doc.data())
            console.log(doc.data())
          })
          setPosts(dbposts);
        })
        break;
      case "posts":
        break;
      case "ranking":
        const dbposts2 = [];
        db.collection('ad').orderBy("likecount", "desc").get().then(snapshot => {
          snapshot.forEach(doc => {
            dbposts2.push(doc.data())
            console.log(doc.data())
          })
          setPosts(dbposts2);
        })
        break;
    }
  },[props.page])


  const classes = useStyles();

  const latestposts = posts.map((post) =>
    <>
      <AdCard {...post}/>
    </>
  );
    
  return (
    <div className={classes.cardgrid}>
      <div class="grid" data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth": 30 }'>
        {latestposts}
      </div>
    </div>
  );
}
  
export default LatestPosts;