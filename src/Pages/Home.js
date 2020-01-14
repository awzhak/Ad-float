import React, { useState } from 'react';
import HomeCarousel from './../Components/HomeCarousel';
import LatestPosts from './../Components/LatestPosts';
import { Typography } from '@material-ui/core';


function Home() {
  const colors = [ 'Red', 'Blue', 'Black', 'Pink', 'Red', 'Blue', 'Black', 'Pink', 'Red', 'Blue', 'Black', 'Pink' ]
  
  return (
    <>
      <HomeCarousel></HomeCarousel>
      <center>
        <Typography variant="h3" gutterBottom color='primary'>
          最新の投稿
        </Typography>
        <LatestPosts colors={colors}></LatestPosts>
      </center>
    </>
  );
}

export default Home;
