import React from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
const Form = () => {
  const classes = useStyles();
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
      <TextField name="creator" variant="outlined" label="Creator" fullWidth value={} onChange={}></TextField>
    </Paper>
  );
};

export default Form;
