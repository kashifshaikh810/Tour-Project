import axios from 'axios';
import {
  ALL_TOUR_REQUEST,
  ALL_TOUR_SUCCESS,
  ALL_TOUR_FAIL,
  CLEAR_ERROR,
  TOURS_BY_TAG_REQUEST,
  TOURS_BY_TAG_SUCCESS,
  TOURS_BY_TAG_FAIL,
  TOUR_DETAIL_REQUEST,
  TOUR_DETAIL_SUCCESS,
  TOUR_DETAIL_FAIL,
  LIKE_TOUR_REQUEST,
  LIKE_TOUR_SUCCESS,
  LIKE_TOUR_FAIL,
  ALL_CURRENT_USER_TOUR_REQUEST,
  ALL_CURRENT_USER_TOUR_SUCCESS,
  ALL_CURRENT_USER_TOUR_FAIL,
  DELETE_USER_TOUR_REQUEST,
  DELETE_USER_TOUR_SUCCESS,
  DELETE_USER_TOUR_FAIL,
  ADD_NEW_TOUR_REQUEST,
  ADD_NEW_TOUR_SUCCESS,
  ADD_NEW_TOUR_FAIL,
  SEARCH_TOUR_REQUEST,
  SEARCH_TOUR_SUCCESS,
  SEARCH_TOUR_FAIL,
  UPDATE_TOUR_REQUEST,
  UPDATE_TOUR_SUCCESS,
  UPDATE_TOUR_FAIL,
} from '../Constants/tourConstant';

export const getTours = () => async dispatch => {
  try {
    dispatch({type: ALL_TOUR_REQUEST});

    const url = 'http://192.168.100.8:5000/tour';

    const {data} = await axios.get(url);

    dispatch({
      type: ALL_TOUR_SUCCESS,
      payload: data.tours,
    });
  } catch (error) {
    dispatch({
      type: ALL_TOUR_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const getToursByTagName = tag => async dispatch => {
  try {
    dispatch({type: TOURS_BY_TAG_REQUEST});

    const url = `http://192.168.100.8:5000/tour/tag/${tag}`;

    const {data} = await axios.get(url);

    dispatch({
      type: TOURS_BY_TAG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TOURS_BY_TAG_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const getTourDetail = id => async dispatch => {
  try {
    dispatch({type: TOUR_DETAIL_REQUEST});

    const url = `http://192.168.100.8:5000/tour/${id}`;

    const {data} = await axios.get(url);

    dispatch({
      type: TOUR_DETAIL_SUCCESS,
      payload: data.tour,
    });
  } catch (error) {
    dispatch({
      type: TOUR_DETAIL_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const likeTour = id => async dispatch => {
  try {
    dispatch({type: LIKE_TOUR_REQUEST});

    const config = {headers: {'Content-Type': 'application/json'}};

    const url = `http://192.168.100.8:5000/tour/likeTour/${id}`;

    const {data} = await axios.put(url, config);

    dispatch({
      type: LIKE_TOUR_SUCCESS,
      payload: data.updatedTour,
    });
  } catch (error) {
    dispatch({
      type: LIKE_TOUR_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERROR,
  });
};

export const getCurrentUserTour = id => async dispatch => {
  try {
    dispatch({type: ALL_CURRENT_USER_TOUR_REQUEST});

    const config = {headers: {'Content-Type': 'application/json'}};

    const url = `http://192.168.100.8:5000/tour/userTours/${id}`;

    const {data} = await axios.get(url, config);

    dispatch({
      type: ALL_CURRENT_USER_TOUR_SUCCESS,
      payload: data.userTours,
    });
  } catch (error) {
    dispatch({
      type: ALL_CURRENT_USER_TOUR_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const deleteUserTour = id => async dispatch => {
  try {
    dispatch({type: DELETE_USER_TOUR_REQUEST});

    const url = `http://192.168.100.8:5000/tour/${id}`;

    const {data} = await axios.delete(url);

    dispatch({
      type: DELETE_USER_TOUR_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_TOUR_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const addTour = newTourData => async dispatch => {
  try {
    dispatch({type: ADD_NEW_TOUR_REQUEST});

    const config = {headers: {'Content-Type': 'application/json'}};

    const url = `http://192.168.100.8:5000/tour`;

    const {data} = await axios.post(url, newTourData, config);

    dispatch({
      type: ADD_NEW_TOUR_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: ADD_NEW_TOUR_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const searchTour = searchQuery => async dispatch => {
  try {
    dispatch({type: SEARCH_TOUR_REQUEST});

    const url = `http://192.168.100.8:5000/tour/search?searchQuery=${searchQuery}`;

    const {data} = await axios.get(url);

    dispatch({
      type: SEARCH_TOUR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_TOUR_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const updateTour = (id, updateTourData) => async dispatch => {
  try {
    dispatch({type: UPDATE_TOUR_REQUEST});

    const config = {headers: {'Content-Type': 'application/json'}};

    const url = `http://192.168.100.8:5000/tour/${id}`;

    const {data} = await axios.put(url, updateTourData, config);

    dispatch({
      type: UPDATE_TOUR_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TOUR_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};
