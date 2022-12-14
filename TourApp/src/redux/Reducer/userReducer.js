import {
  CLEAR_ERROR,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_RESET,
  LOGOUT_USER_SUCCESS,
  SIGNIN_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_RESET,
  SIGNIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_RESET,
  SIGNUP_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_RESET,
  UPDATE_USER_SUCCESS,
} from '../Constants/userConstant';

export const userReducer = (state = {user: []}, action) => {
  switch (action.type) {
    case LOGOUT_USER_REQUEST:
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
        user: action.payload.user,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        isLoginSuccess: action.payload.success,
        user: action.payload.user,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        isLogout: action.payload,
        user: null,
      };
    case LOGOUT_USER_FAIL:
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
    case LOGOUT_USER_RESET:
      return {
        ...state,
        isLogout: false,
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

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD_REQUEST:
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PASSWORD_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_PASSWORD_FAIL:
    case UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PASSWORD_RESET:
    case UPDATE_USER_RESET:
      return {
        ...state,
        isUpdated: false,
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
