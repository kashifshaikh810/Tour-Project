import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {profileReducer, userReducer} from './Reducer/userReducer';
import {
  addTourReducer,
  currentUserAllToursReducer,
  deleteUserTourReducer,
  likeTourReducer,
  popularTagsReducer,
  relatedTourReducer,
  tourDetailReducer,
  tourReducer,
  toursByTagReducer,
  updateTourReducer,
} from './Reducer/tourReducer';

const reducer = combineReducers({
  registerUser: userReducer,
  allTours: tourReducer,
  toursByTag: toursByTagReducer,
  tourDetail: tourDetailReducer,
  likeTour: likeTourReducer,
  currentUserTours: currentUserAllToursReducer,
  deleteTour: deleteUserTourReducer,
  addNewTour: addTourReducer,
  updatedTour: updateTourReducer,
  profile: profileReducer,
  relatedTours: relatedTourReducer,
  popularTags: popularTagsReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
