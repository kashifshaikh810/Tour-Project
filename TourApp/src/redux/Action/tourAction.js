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
} from '../Constants/tourConstant';

export const getTours = () => async dispatch => {
  try {
    dispatch({type: ALL_TOUR_REQUEST});

    const url = 'http://192.168.100.4:5000/tour';

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

    const url = `http://192.168.100.4:5000/tour/tag/${tag}`;

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

    const url = `http://192.168.100.4:5000/tour/${id}`;

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

export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
