import {
  ALL_TOUR_FAIL,
  ALL_TOUR_REQUEST,
  ALL_TOUR_SUCCESS,
  CLEAR_ERROR,
} from '../Constants/tourConstant';

export const tourReducer = (state = {tours: []}, action) => {
  switch (action.type) {
    case ALL_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_TOUR_SUCCESS:
      return {
        ...state,
        loading: false,
        tours: action.payload,
      };
    case ALL_TOUR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
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
