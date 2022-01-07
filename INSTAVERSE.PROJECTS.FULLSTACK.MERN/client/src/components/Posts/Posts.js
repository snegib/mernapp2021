import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux'; /* So inside of there, we have to well, somehow fetch the data from that Global Redux store. And we can do that with the help of something known as useSelector hook. */
import { Grid, CircularProgress } from '@material-ui/core';
const Posts = () => {
  const classes = useStyles();
  const posts = useSelector(state => {
    return state.posts; /* state.posts is same which is inside 
      reducers=> index.js 
      export default combineReducers({
      posts: posts,
    }); */
  }); /* Inside of the use selector, we're going to have a callback function.
  As a parameter in that callback function, we get access to that whole global redux store or state, and then we can immediately return state that posts. */

  console.log('Posts component ', posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map(post => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
