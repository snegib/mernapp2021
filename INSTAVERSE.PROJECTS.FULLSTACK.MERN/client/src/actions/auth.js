import { AUTH } from '../constants/actionTypes';
import * as api from '../api';
export const login = (formData, history) => async dispatch => {
  try {
    // log in the user
    const { data } = await api.login(formData);

    dispatch({ type: AUTH, data });
    console.log('actions auth history ', history);
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async dispatch => {
  try {
    // signup the user
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    console.log('actions auth history ', history);

    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
