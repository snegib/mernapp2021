import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './styles';
import instaverse from '../../images/instaverse.jpg';

export const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} varient="h2" align="center">
        Instaverse
      </Typography>
      <img
        className={classes.image}
        src={instaverse}
        alt="instaverse"
        height="60"
      />
    </AppBar>
  );
};

export default Navbar;
