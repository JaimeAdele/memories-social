import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    console.log(error.response.data);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    console.log(error.response.data);
  }
};

export const googleSignup = (credential, navigate) => async (dispatch) => {
  try {
    const { data } = await api.googleSignup(credential);

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    console.log(error.response.data);
  }
};

export const googleLogin = (credential, navigate) => async (dispatch) => {
  try {
    const { data } = await api.googleLogin(credential);

    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    console.log(error.response.data);
  }
};