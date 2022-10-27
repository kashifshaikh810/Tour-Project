import axios from 'axios';
import {
  CLEAR_ERROR,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '../Constants/userConstant';

export const userSignUp = registerData => async dispatch => {
  try {
    dispatch({type: SIGNUP_REQUEST});

    const config = {headers: {'Content-Type': 'application/json'}};

    const url = 'http://192.168.100.4:5000/users/signup';

    const {data} = await axios.post(url, registerData, config);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SIGNUP_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
