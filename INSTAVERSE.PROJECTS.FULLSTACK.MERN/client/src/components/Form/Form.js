import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    // creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const post = useSelector(state =>
    currentId ? state.posts.find(p => p._id === currentId) : null
  ); /* Also now we're fetching all the posts, 
  const posts = useSelector(state => state.posts) 
  but in this case, we don't want all the posts. We only want the data for the updated post. Right, so to do that in here, we're not going to return all the post, what we are going to do is we're going to have another ternary and that ternary is going to say if we have a currentId.
  So if it's not now, then we want to loop over state.posts and we want to call a find method on them. More specifically, we want to find the post, right? So let's call it P in this case. That has the same ID  p._id === currentId, as our current ID, So this is going to make sure that we absolutely find only that specific post if we don't have the currentId, though in that case we just want to have 'null'. And now we're not returning post here. It's going to simply be post because the find method is returning one singular thing. */

  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  /* So it's in here, we say when this callback function should be run and what changes. Well.When the post value changes from nothing to the actual post and we want to run this function, then in here we're going to say if post exists, then we're going to setPostData(post). And remember, that's our state field here, setPostData, and we are simply going to populate it
   useEffect(() => {  }, [post]);
   with the data of the post. And that's it. */
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  /* So once the user submits, we want to send over a post request with all the data that the user typed
in. So first of all, we always have to say e.preventDefault(), not to get the refresh in the browser. And then in there, we're going to dispatch an action, so dispatch this time, it's going to be create
post now inside of there, we're going to pass all the data from our state post data. So now we're making that request once we click the submit button.  Once the action is dispatched, then we go to reducers right there in the post reducer.*/
  const handleSubmit = e => {
    e.preventDefault();
    console.log('hello postData ', postData);
    /* If we have a currentId, which means that if the currentId is not known. Then we're not going to dispatch a createPost. We are going to dispatch something different. And that's something different is going to be this time updatePost. But keep in mind with updatePost, we need to also know the ID.. So the postData is going to be the second parameter, first parameter is going to be the currentId. And else we're going to dispatch a createPost. So if we don't have a currently selected ID., that must mean that we are creating a post and not updating it. */
    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      // creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align='center'>Please sign in to create your own posts and like other's posts.</Typography>
      </Paper>
    );
  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? 'Editing' : 'Createing'} a Post
        </Typography>
        {/* <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={e => {
            setPostData({ ...postData, creator: e.target.value });
          }}
        ></TextField> */}
        {/* What we actually have to do is first spread the postData. So that's ...postData And then we have a creator right there. That means that in every text field, if we do the same thing, but only change the last property. Well, that means all the data is going to persist while changing only this specific property of that specific text field. */}
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={e => {
            setPostData({ ...postData, title: e.target.value });
          }}
        ></TextField>
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={e => {
            setPostData({ ...postData, message: e.target.value });
          }}
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={e => {
            setPostData({ ...postData, tags: e.target.value.split(',') });
          }}
        ></TextField>
        <div className={classes.fileInput}>
          {/* we install 'npm install react-file-base64 --legecy-peer-deps' We'll use this to convert our images. */}
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
