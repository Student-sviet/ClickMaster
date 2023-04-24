import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { Grid, Paper } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function AuthTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const paperStyle = {  width:'60vw' }
  return (
    <Grid align='center'>
    <Paper style={paperStyle} >
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> <Grid align='center'>
      <Tabs value={value} onChange={handleChange} aria-label="auth tabs">
     
        <Tab label="Login" />
        <Tab label="Signup" />
      </Tabs></Grid>
      <TabPanel value={value} index={0}>
        <Login/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp />
      </TabPanel>
    </Box>
    </Paper>
    </Grid>
  );
}

export default AuthTabs;
