import React, {useEffect, useState} from 'react';
import HomeMarkup from './HomeMarkup';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearErrors,
  getPopularTags,
  getTours,
  likeTour,
} from '../../redux/Action/tourAction';
import {ToastAndroid} from 'react-native';

const Home = props => {
  const dispatch = useDispatch();
  const {loading, tours, error} = useSelector(state => state.allTours);

  const {
    loading: tagLoading,
    tags,
    error: tagError,
  } = useSelector(state => state.popularTags);

  const {user, isAuthenticated} = useSelector(state => state.registerUser);

  const [userId, setUserId] = useState('');

  const {updatedTour, error: updatedTourError} = useSelector(
    state => state.likeTour,
  );

  const [noReload, setNoReload] = useState(false);

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

    dispatch(getPopularTags());
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
    <HomeMarkup
      {...props}
      loading={noReload ? false : loading}
      tours={tours}
      updatedTour={updatedTour}
      likeOnPressHandler={likeOnPressHandler}
      userId={userId}
      isAuthenticated={isAuthenticated}
      tagLoading={tagLoading}
      tags={tags}
    />
  );
};

export default Home;
