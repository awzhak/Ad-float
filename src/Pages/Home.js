import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import firebase from 'firebase/app';
import 'firebase/auth';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 20
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  const classes = useStyles();

  return (
    <>
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
      <div className={classes.root}>
      <Grid 
        container spacing={3}
      >
        <Grid item >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="a.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="a.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="a.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.root}>
      <Grid 
        container spacing={3}
      >
        <Grid item >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="a.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="a.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="a.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.root}>
      <Grid 
        container spacing={3}
      >
        <Grid item >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="a.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="a.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="a.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>
      </div>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Home;
