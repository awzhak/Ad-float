import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Art from '../images/test.jpg';

const useStyles = makeStyles(theme => ({
  style: {
    margin:30
  },
  card: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function ArtDetails(){
  const classes = useStyles();
  return(
    <center className={classes.style}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              G
            </Avatar>
          }
          title="ゴッホ・リョウジ"
          subheader="@birthday0227"
        />
        <CardMedia
          className={classes.media}
          image={Art}
          title="Paella dish"
        />
        <CardContent>
          <p align="left" style={{fontSize:25}}>説明</p>
          <Typography variant="body2" color="textSecondary" component="p">
          Great things are not done by impulse, but by a series of small things brought together.
          Your life would be very empty if you had nothing to regret.
          I envy the Japanese the extreme clarity in whatever they do.
          I am always doing what I can’t do yet, in order to learn how to do it.
          Great things are done by a series of small things brought together.
          Do not quench your inspiration and your imagination; do not become the slave of your model.
          </Typography>
        </CardContent>
      </Card>
    </center>
  );
}