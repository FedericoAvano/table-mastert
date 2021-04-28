import React from 'react';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import PageHeader from '../Components/PageHeader';
import MyTextField from '../Components/MyTextField' 

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


function PageTwo() {
  const classes =useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.appMain}>
      <PageHeader title="Tab Test" subTitle="Material UI Table test" />
      <MyTextField />
    </div>
    <CssBaseline />
    </ThemeProvider>
  );
}

export default PageTwo;