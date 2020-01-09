import React, { useState } from 'react';
import HomeCarousel from './../Components/HomeCarousel';
import LatestPosts from './../Components/LatestPosts';

function Home() {
  return (
    <>
      <HomeCarousel></HomeCarousel>
      <LatestPosts></LatestPosts>
    </>
  );
}

export default Home;
