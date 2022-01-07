import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const handleSubmit = () => {};
  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      ></form>
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
          setPostData({ ...postData, tags: e.target.value });
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
    </Paper>
  );
};

export default Form;
