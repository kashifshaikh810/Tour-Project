import React, {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import SearchScreenMarkup from './SearchScreenMarkup';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, getTours, likeTour} from '../../redux/Action/tourAction';

const SearchScreen = props => {
  const dispatch = useDispatch();
  const {loading, tours, error} = useSelector(state => state.allTours);

  const {user, isAuthenticated} = useSelector(state => state.registerUser);

  const [userId, setUserId] = useState('');

  const {updatedTour, error: updatedTourError} = useSelector(
    state => state.likeTour,
  );
  const [noReload, setNoReload] = useState(false);

  const [search, setSearch] = useState('');
  const [searchError, setSearchError] = useState('');

  const searchOnChange = text => {
    setSearch(text);
    setSearchError('');
  };

  const searchOnPressHandler = () => {
    if (!search) {
      setSearchError('Please give the tour title');
    }
  };

  useEffect(() => {
    if (error) {
      ToastAndroid.showWithGravityAndOffset(
        error,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      dispatch(clearErrors());
    }

    if (updatedTourError) {
      ToastAndroid.showWithGravityAndOffset(
        updatedTourError,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      dispatch(clearErrors());
    }

    if (updatedTour) {
      dispatch(getTours());
    }

    dispatch(getTours());
  }, [dispatch, error, updatedTourError, updatedTour]);

  useEffect(() => {
    setUserId(user?._id);
  }, [user, isAuthenticated]);

  const likeOnPressHandler = item => {
    dispatch(likeTour(item._id));
    setNoReload(true);
  };

  return (
    <SearchScreenMarkup
      {...props}
      search={search}
      setSearch={setSearch}
      searchError={searchError}
      setSearchError={setSearchError}
      searchOnChange={searchOnChange}
      searchOnPressHandler={searchOnPressHandler}
      loading={noReload ? false : loading}
      tours={tours}
      updatedTour={updatedTour}
      likeOnPressHandler={likeOnPressHandler}
      userId={userId}
      isAuthenticated={isAuthenticated}
    />
  );
};

export default SearchScreen;
