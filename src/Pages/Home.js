import React, { useState } from 'react';
import HomeCarousel from './../Components/HomeCarousel';
import LatestPosts from './../Components/LatestPosts';
import Typography from '@material-ui/core'

function Home() {
  return (
    <>
      <HomeCarousel></HomeCarousel>
      <Typography variant="h3" gutterBottom color='primary'>
        最新の投稿
      </Typography>
      <LatestPosts></LatestPosts>
    </>
  );
}

export default Home;
