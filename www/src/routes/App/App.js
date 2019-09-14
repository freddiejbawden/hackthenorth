import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import People from './pages/People';
import Meet from './pages/Meet';
import Profile from './pages/Profile';
import firebase from 'firebase';

const db = firebase.firestore();


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    console.log(newValue);
    setValue(newValue);
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs  centered={true} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="People" {...a11yProps(0)} />
          <Tab label="Meet" {...a11yProps(1)} />
          <Tab label="Profile" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <People db={db}></People>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Meet></Meet>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Profile></Profile>
      </TabPanel>
    </div>
  );
}