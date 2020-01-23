import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: 150,
    maxWidth: 150,
    backgroundColor: theme.palette.background.paper,
    textTransform: "none",
    padding: '0px',
    marginTop: '1px',
    marginBottom: '1px',
  },
  item: {
    padding: '0px',
  },
  inline: {
    display: 'inline',
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function AlignItemsList(props) {
  const { name,body } = props;
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem className={classes.item} alignItems="flex-start" >
        <ListItemAvatar>
          <Avatar className={classes.small} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
                {body}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}