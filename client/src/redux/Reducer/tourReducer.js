import {
  ADD_NEW_TOUR_FAIL,
  ADD_NEW_TOUR_REQUEST,
  ADD_NEW_TOUR_RESET,
  ADD_NEW_TOUR_SUCCESS,
  ALL_CURRENT_USER_TOUR_FAIL,
  ALL_CURRENT_USER_TOUR_REQUEST,
  ALL_CURRENT_USER_TOUR_SUCCESS,
  ALL_TOUR_FAIL,
  ALL_TOUR_REQUEST,
  ALL_TOUR_SUCCESS,
  CLEAR_ERROR,
  DELETE_USER_TOUR_FAIL,
  DELETE_USER_TOUR_REQUEST,
  DELETE_USER_TOUR_RESET,
  DELETE_USER_TOUR_SUCCESS,
  LIKE_TOUR_FAIL,
  LIKE_TOUR_REQUEST,
  LIKE_TOUR_SUCCESS,
  POPULAR_TAGS_FAIL,
  POPULAR_TAGS_REQUEST,
  POPULAR_TAGS_SUCCESS,
  RELATED_TOUR_FAIL,
  RELATED_TOUR_REQUEST,
  RELATED_TOUR_SUCCESS,
  SEARCH_TOUR_FAIL,
  SEARCH_TOUR_REQUEST,
  SEARCH_TOUR_SUCCESS,
  TOURS_BY_TAG_FAIL,
  TOURS_BY_TAG_REQUEST,
  TOURS_BY_TAG_SUCCESS,
  TOUR_DETAIL_FAIL,
  TOUR_DETAIL_REQUEST,
  TOUR_DETAIL_SUCCESS,
  UPDATE_TOUR_FAIL,
  UPDATE_TOUR_REQUEST,
  UPDATE_TOUR_RESET,
  UPDATE_TOUR_SUCCESS,
} from '../Constants/tourConstant';

export const tourReducer = (state = {tours: []}, action) => {
  switch (action.type) {
    case SEARCH_TOUR_REQUEST:
    case ALL_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_TOUR_SUCCESS:
    case ALL_TOUR_SUCCESS:
      return {
        ...state,
        loading: false,
        tours: action.payload,
      };
    case SEARCH_TOUR_FAIL:
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

export const currentUserAllToursReducer = (state = {tours: []}, action) => {
  switch (action.type) {
    case ALL_CURRENT_USER_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CURRENT_USER_TOUR_SUCCESS:
      return {
        ...state,
        loading: false,
        tours: action.payload,
      };
    case ALL_CURRENT_USER_TOUR_FAIL:
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

export const deleteUserTourReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_USER_TOUR_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_USER_TOUR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_USER_TOUR_RESET:
      return {
        ...state,
        isDeleted: false,
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

export const addTourReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_NEW_TOUR_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
    case ADD_NEW_TOUR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_NEW_TOUR_RESET:
      return {
        ...state,
        success: false,
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

export const updateTourReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TOUR_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_TOUR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_TOUR_RESET:
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

export const relatedTourReducer = (state = {relatedTour: []}, action) => {
  switch (action.type) {
    case RELATED_TOUR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RELATED_TOUR_SUCCESS:
      return {
        ...state,
        loading: false,
        relatedTour: action.payload,
      };
    case RELATED_TOUR_FAIL:
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

export const popularTagsReducer = (state = {tags: []}, action) => {
  switch (action.type) {
    case POPULAR_TAGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POPULAR_TAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.payload,
      };
    case POPULAR_TAGS_FAIL:
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
