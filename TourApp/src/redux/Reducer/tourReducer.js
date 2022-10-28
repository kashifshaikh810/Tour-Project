import {
  ALL_TOUR_FAIL,
  ALL_TOUR_REQUEST,
  ALL_TOUR_SUCCESS,
  CLEAR_ERROR,
  LIKE_TOUR_FAIL,
  LIKE_TOUR_REQUEST,
  LIKE_TOUR_SUCCESS,
  TOURS_BY_TAG_FAIL,
  TOURS_BY_TAG_REQUEST,
  TOURS_BY_TAG_SUCCESS,
  TOUR_DETAIL_FAIL,
  TOUR_DETAIL_REQUEST,
  TOUR_DETAIL_SUCCESS,
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

export const toursByTagReducer = (state = {tours: []}, action) => {
  switch (action.type) {
    case TOURS_BY_TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TOURS_BY_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        tours: action.payload,
      };
    case TOURS_BY_TAG_FAIL:
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

export const tourDetailReducer = (state = {tour: {}}, action) => {
  switch (action.type) {
    case TOUR_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TOUR_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        tour: action.payload,
      };
    case TOUR_DETAIL_FAIL:
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

export const likeTourReducer = (state = {updatedTour: {}}, action) => {
  switch (action.type) {
    case LIKE_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIKE_TOUR_SUCCESS:
      return {
        ...state,
        loading: false,
        updatedTour: action.payload,
      };
    case LIKE_TOUR_FAIL:
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
