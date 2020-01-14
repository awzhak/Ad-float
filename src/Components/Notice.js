import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//Switch
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Notice() {
// Notice
  const classes = useStyles();

// Switch
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  // 通知リスト
  const items = [
    {name: 'わいちゃん', text: 'いいね', kind: 'love'},
    {name: 'なあちゃん', text: 'ライド', kind: 'rank'},
    {name: 'いいちゃん', text: 'しねぇぇ', kind: 'DM'},
    {name: 'うったんちゃん', text: 'っせえ', kind: 'rank'},
    {name: 'むっちゃん', text: 'くらえ！おら！', kind: 'DM'},
    {name: 'わいちゃん', text: 'いいね', kind: 'love'},
    {name: 'なあちゃん', text: 'ライド', kind: 'rank'},
    {name: 'いいちゃん', text: 'しねぇぇ', kind: 'DM'},
    {name: 'うったんちゃん', text: 'っせえ', kind: 'rank'},
    {name: 'むっちゃん', text: 'くらえ！おら！', kind: 'DM'},
  ];


return (
  <Container maxWidth="xs">
  <FormGroup row>
      <FormControlLabel
        control={
          <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        }
        label="💛"
      />
      <FormControlLabel
        control={
          <Switch
        checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        }
        label="👤"
      />
      <FormControlLabel
        control={
          <Switch
        checked={state.checkedC}
        onChange={handleChange('checkedC')}
        value="checkedC"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        }
        label="👑"
      />
    </FormGroup>
  <List className={classes.root}>
  <Divider component="li" />
      {items.map((item,index) => (
        <div key={index} className="Mail-List">
          {state.checkedA && item.kind === 'love'? 
        <div className="Mail-Item">
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
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
                {item.kind === 'love' ? '💛': item.kind === 'DM' ? '👤': '👑'}：
              </Typography>
              {"いいねされました"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider component="li" />
      </div> :
        state.checkedB && item.kind === 'DM' ?
        <div className="Mail-Item">
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
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
                {item.kind === 'love' ? '💛': item.kind === 'DM' ? '👤': '👑'}：
              </Typography>
              {item.text}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider component="li" />
      </div> :
        state.checkedC && item.kind === 'rank' ?
        <div className="Mail-Item">
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
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
                {item.kind === 'love' ? '💛': item.kind === 'DM' ? '👤': '👑'}：
              </Typography>
              {"ランクイン"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider component="li" />
      </div> : ''}
      </div>
      ))}
      {!state.checkedA && !state.checkedB && !state.checkedC ? '通知はありません' : ''}
  </List>
  </Container>
  );
}