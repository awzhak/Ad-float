import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  item:{
      alignItems: 'flex-end'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width: 'flex'
  },
  gridList: {
    width: '100%',
    height: 350,
  },
}));

const　items = [
    {name: 'jack', body: 'よろしくお願いいたします。'},
    {name: '自分', body: 'よろしくお願いいたします'},
    {name: '自分', body: 'よろしくお願いいたします'},
    {name: 'jack', body: 'よろしくお願いいたします'},
    {name: '自分', body: 'よろしくお願いいたします'},
]

export default function AlignItemsList(props) {
  const {userId} = props;
  const classes = useStyles();

  return (
    <List className={classes.root}>
        <div className={classes.grid}>
      <GridList cellHeight={50} className={classes.gridList} cols={1}>
      {items.map((item, index) => (
          <div className={classes.item}>
              {item.name === '自分' ?
              <ListItem alignItems="flex-start">
                 <ListItemText
                    align="right"
                    primary={item.name}
                    secondary={
                 <React.Fragment>
                 <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                  align="right"
                >
                  {item.body}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>:
        <ListItem alignItems="flex-start" >
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {item.body}
              </Typography>
            </React.Fragment>
          }
        />
        </ListItem> }
        </div>
      ))}
      </GridList>
    </div>
      
    </List>
  );
}