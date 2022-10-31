import React, {useEffect, useState} from 'react';
import HomeMarkup from './HomeMarkup';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, getTours, likeTour} from '../../redux/Action/tourAction';
import {ToastAndroid} from 'react-native';

const Home = props => {
  const dispatch = useDispatch();
  const {loading, tours, error} = useSelector(state => state.allTours);

  const {user} = useSelector(state => state.registerUser);

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

    dispatch(getTours());
  }, [dispatch, error, updatedTourError, updatedTour]);

  const likeOnPressHandler = item => {
    if (user?._id) {
      dispatch(likeTour(item._id));
      setNoReload(true);
    }
  };

  return (
    <HomeMarkup
      {...props}
      loading={noReload ? false : loading}
      tours={tours}
      updatedTour={updatedTour}
      likeOnPressHandler={likeOnPressHandler}
      userId={user?._id}
    />
  );
};

export default Home;
