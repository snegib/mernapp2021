import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Input from './Input';
// import { useHistory } from 'react-router-dom';
/* useHistory is replaced with useNavigate */
import { useNavigate } from 'react-router-dom';

import { login, signup } from '../../actions/auth';
import { useDispatch } from 'react-redux';

/* STEP 2 Registration with web Token */
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] =
    useState(initialState); /* STEP 1 Registration with web Token */
  const [isSignup, setIsSignup] = useState(true);
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* STEP 3 Registration with web Token */
  const handleSubmit = e => {
    e.preventDefault();

    /* STEP 4 Registration with web Token 
      logic ofr signup or signin*/
    if (isSignup) {
      console.log('Auth signup ', isSignup, navigate);
      dispatch(signup(formData, navigate));
    } else {
      console.log('Auth Login ', login, navigate);
      dispatch(login(formData, navigate));
    }
    // console.log(formData, navigate);
  };

  /* STEP 4 Registration with web Token */
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* on/off */
  const handleShowPassword = () =>
    setShowPassword(prevShowPassword => !prevShowPassword);

  /* on/off */
  const switchMode = () => {
    setIsSignup(prevIsSignup => !prevIsSignup);
    setShowPassword(false);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Login'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Adress"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? 'Already have an account? Login'
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
