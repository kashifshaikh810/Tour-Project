import {
  CLEAR_ERROR,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  SIGNIN_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_RESET,
  SIGNIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_RESET,
  SIGNUP_SUCCESS,
} from '../Constants/userConstant';

export const userReducer = (state = {user: []}, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
    case SIGNIN_REQUEST:
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        isRegisterSuccess: action.payload.success,
        user: action.payload,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        isLoginSuccess: action.payload.success,
        user: action.payload,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOAD_USER_FAIL:
    case SIGNIN_FAIL:
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };
    case SIGNUP_RESET:
      return {
        ...state,
        isRegisterSuccess: false,
      };
    case SIGNIN_RESET:
      return {
        ...state,
        isLoginSuccess: false,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
