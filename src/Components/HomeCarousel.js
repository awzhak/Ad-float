import React, { useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  item: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  calitem: {
    maxWidth: "80rem",
    minWidth: "900px",
    paddingTop: 20,
    paddingRight: 100,
    paddingBottom: 50,
    paddingLeft: 100
  },
}));

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  const classes = useStyles();

  const colors = ['Red','Yellow','Green','Blue','Violet'];
  const carouselItems = colors.map((color,index) =>
    <Carousel.Item className={classes.calitem}>
      <div className={classes.item}>
      <Grid 
        container spacing={3}
      >
        <Grid item >
          <Card bg="dark" text="white" style={{ width: '13rem' }}>
            <Card.Img variant="top" src="a.jpg" />
            <Card.Body>
              <Card.Title>{color}</Card.Title>
              <Card.Text>
                the card's content.{index + 1}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Grid>

        <Grid item >
          <Card bg="dark" text="white" style={{ width: '13rem' }}>
            <Card.Img variant="top" src="a.jpg" />
            <Card.Body>
              <Card.Title>{color}</Card.Title>
              <Card.Text>
                the card's content.{index + 1}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Grid>

        <Grid item >
          <Card bg="dark" text="white" style={{ width: '13rem' }}>
            <Card.Img variant="top" src="a.jpg" />
            <Card.Body>
              <Card.Title>{color}</Card.Title>
              <Card.Text>
                the card's content.{index + 1}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>
      </div>
    </Carousel.Item>
  );

  return (
    <Carousel
      interval={3000}
      direction={direction}
      onSelect={handleSelect}
      indicators
    >
      {carouselItems}
    </Carousel>
  );
}

export default HomeCarousel;
