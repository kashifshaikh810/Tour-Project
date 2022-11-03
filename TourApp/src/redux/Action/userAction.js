import axios from 'axios';
import {
  CLEAR_ERROR,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} from '../Constants/userConstant';

export const userSignUp = registerData => async dispatch => {
  try {
    dispatch({type: SIGNUP_REQUEST});

    const config = {headers: {'Content-Type': 'application/json'}};

    const url = 'http://192.168.100.8:5000/users/signup';

    const {data} = await axios.post(url, registerData, config);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const userSignIn = signInData => async dispatch => {
  try {
    dispatch({type: SIGNIN_REQUEST});

    const config = {headers: {'Content-Type': 'application/json'}};

    const url = 'http://192.168.100.8:5000/users/signin';

    const {data} = await axios.post(url, signInData, config);

    console.log(data, 'data');
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SIGNIN_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({type: LOAD_USER_REQUEST});

    const url = 'http://192.168.100.8:5000/users/me';

    const {data} = await axios.get(url);

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const userLogout = () => async dispatch => {
  try {
    dispatch({type: LOGOUT_USER_REQUEST});

    const url = 'http://192.168.100.8:5000/users/logout';

    const {data} = await axios.get(url);

    dispatch({
      type: LOGOUT_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_USER_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
