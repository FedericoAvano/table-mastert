import React from 'react';
import MyTable from './Components/MyTable'
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import PageHeader from './Components/PageHeader';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '100%'
  }
})


function App() {
  const classes =useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.appMain}>
      <PageHeader title="Tab Test" subTitle="Material UI Table test" />
      <MyTable />
    </div>
    </ThemeProvider>
  );
}

export default App;
