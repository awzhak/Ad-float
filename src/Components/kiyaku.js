import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 50,
    minHeight: "50rem"
  },
  title: {
    textAlign: "center"
  },
  details: {
    marginTop: 20
  }
}))

export default function Kiyaku(){
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Typography className={classes.title} variant="h2" id="tableTitle">
        利用規約
      </Typography>
      <div className={classes.details}>
        広告を採用した場合、採用料 1000円/件 の支払いをお願いします。
      </div>
    </div>
  )
}