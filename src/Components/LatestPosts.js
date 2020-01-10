import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    width: "14rem",
    marginBottom: 15
  },
  cardgrid: {
    textAlign: "center",
    margin: 30
  }
}));

function LatestPosts() {
  const classes = useStyles();

  const colors = ['Red','Yellow','Green','Blue','Violet', 'Red','Yellow','Green','Blue','Violet', 'Red','Yellow','Green','Blue','Violet'];
  
  const latestpost = colors.map((color,index) =>
    <div class="grid-item">
      <Card className={classes.card}>
        <Card.Img variant="top" src="aaa.svg" />
        <Card.Body>
          <Card.Title>{color}</Card.Title>
          <Card.Text>
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );

  return (
    <div className={classes.cardgrid}>
      <Typography variant="h3" gutterBottom color='primary'>
        最新の投稿
      </Typography>
      <div class="grid js-masonry" data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth": 30 }'>
        {latestpost}
      </div>
    </div>
  );
  }
  
  export default LatestPosts;