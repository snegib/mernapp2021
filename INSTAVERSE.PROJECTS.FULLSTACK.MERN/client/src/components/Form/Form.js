import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  /* So once the user submits, we want to send over a post request with all the data that the user typed
in. So first of all, we always have to say e.preventDefault(), not to get the refresh in the browser. And then in there, we're going to dispatch an action, so dispatch this time, it's going to be create
post now inside of there, we're going to pass all the data from our state post data. So now we're making that request once we click the submit button.  Once the action is dispatched, then we go to reducers right there in the post reducer.*/
const handleSubmit = (e) => {
  e.preventDefault()
    console.log('hello');
    // dispatch(createPost({ ...postData, name: user?.result?.name }))
    dispatch(createPost(postData));
  };
  const clear = () => {};
  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Post</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={e => {
            setPostData({ ...postData, creator: e.target.value });
          }}
        ></TextField>
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
            onDone={({ base64 }) => {
              setPostData({ ...postData, selectedFile: base64 });
            }}
          ></FileBase>
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
