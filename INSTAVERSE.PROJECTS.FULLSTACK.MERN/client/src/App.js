import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import instaverse from './images/instaverse.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography varient="h2" align="center">
          Instaverse
        </Typography>
        <img src={instaverse} alt="instaverse" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
