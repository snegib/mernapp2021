import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import instaverse from './images/instaverse.jpg';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts);
  }, [
    currentId,
    dispatch,
  ]); /* 'currentId' is handling the  changes show in form submit without refreshing the page  */
  return (
    <Container maxWidth="lg">
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
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
