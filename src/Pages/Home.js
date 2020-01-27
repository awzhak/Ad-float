import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HomeCarousel from './../Components/HomeCarousel';
import LatestPosts from './../Components/LatestPosts';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
// トップページ
import TopPage from './Toppage';
import SearchBar from './../Components/SearchBar'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  search: {
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}



function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value)
  };

  const colors = [ 'Red', 'Blue', 'Black', 'Pink', 'Red', 'Blue', 'Black', 'Pink', 'Red', 'Blue', 'Black', 'Pink' ]
  
  return (
    <>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Top"  {...a11yProps(0)}/>
          <Tab label="Home"  {...a11yProps(1)}/>
          <Tab label="投稿" {...a11yProps(2)}/>
          <Tab label="募集" {...a11yProps(3)}/>
          <Tab label="Ranking" {...a11yProps(4)}/>
        </Tabs>
      </Paper>

      <TabPanel value={value} index={0}>
        <center>
          <TopPage onClick={handleChange} value={value}/>
        </center>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <center>
          <Typography variant="h3" gutterBottom color='primary'>
            最新の投稿
          </Typography>
          <LatestPosts page={"home"} />
        </center>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <center>
        <SearchBar />
          <Typography variant="h3" gutterBottom color='primary'>
            最新の投稿
          </Typography>
          <LatestPosts page={"posts"} />
        </center>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <center>
        <SearchBar />
          <Typography className={classes.padding} variant="h3" gutterBottom color='primary'>
            最新の募集
          </Typography>
          <LatestPosts page={"projects"} />
        </center>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <center>
          <Typography variant="h3" gutterBottom color='primary'>
            人気投稿
          </Typography>
          <LatestPosts page={"ranking"} />
        </center>
      </TabPanel>
    </>
    
  );
}

export default Home;
