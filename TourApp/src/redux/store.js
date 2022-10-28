import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userReducer} from './Reducer/userReducer';
import {
  tourDetailReducer,
  tourReducer,
  toursByTagReducer,
} from './Reducer/tourReducer';

const reducer = combineReducers({
  registerUser: userReducer,
  allTours: tourReducer,
  toursByTag: toursByTagReducer,
  tourDetail: tourDetailReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
