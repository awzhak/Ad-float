import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from './List'
import Item from './Item'
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'flex',
    position: 'absolute',
    zIndex: -1,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 300,
    textTransform: 'none',
    maxWidth: 'fit-content',
  },
  tab: {
    padding: '0px',
  },
  panel: {
    width: '100%',
  },
  textroot: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  text: {
    width: '75%',
    height: 50
  },
  button: {
      height: 50
  }
}));

function tag(name,body){
    return (
        <div>
            <List name={name} body={body}/>
        </div>
    )
}

// 相手の最後のメッセージ
const items = [
    {name: 'hofsdfdfsad', body: 'bbbccccaa',userId: 'adc'},
    {name: 'yamada', body: 'テスト',userId: 'adc'},
    {name: 'yoshida', body: 'テスト',userId: 'adc'},
]

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
          <Tab label="DM" {...a11yProps(0)} />
          {items.map((item,index) => (
              <Tab className={classes.tab} label={tag(item.name,item.body)} {...a11yProps(index + 1)} />
          ))}
      </Tabs>
      <TabPanel className={classes.panel} value={value} index={0}>
          DMtop
      </TabPanel>
      {items.map((item,index) => (
        <TabPanel className={classes.panel} value={value} index={index + 1}>
          <Item userId={item.name}/>
            <form className={classes.textroot} noValidate autoComplete="off">
              <TextField className={classes.text} id="outlined-basic" label="Outlined" variant="outlined" />
              <Button className={classes.button} variant="contained" color="primary">
                  Send
              </Button>
            </form>
        </TabPanel>
      ))}
    </div>
  );
}