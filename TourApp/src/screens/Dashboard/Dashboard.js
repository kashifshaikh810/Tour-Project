import React, {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearErrors,
  deleteUserTour,
  getCurrentUserTour,
  getTours,
} from '../../redux/Action/tourAction';
import {DELETE_USER_TOUR_RESET} from '../../redux/Constants/tourConstant';
import DashboardMarkup from './DashboardMarkup';

const Dashboard = props => {
  let noReload = props?.route?.params?.noReload;
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.registerUser);
  const {loading, tours, error} = useSelector(state => state.currentUserTours);

  const [noReloading, setNoReloading] = useState(false);
  const [showLoaderOnlyOneCard, setShowLoaderOnlyOneCard] = useState('');

  const {
    loading: deleteLoading,
    isDeleted,
    error: deleteError,
  } = useSelector(state => state.deleteTour);

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

    if (isDeleted) {
      setNoReloading(true);
      dispatch(getTours());
      dispatch(getCurrentUserTour(user?._id));
      ToastAndroid.showWithGravityAndOffset(
        'Tour Deleted succeed',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      dispatch({type: DELETE_USER_TOUR_RESET});
    }

    if (deleteError) {
      ToastAndroid.showWithGravityAndOffset(
        deleteError,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      dispatch(clearErrors());
    }

    dispatch(getCurrentUserTour(user?._id));
  }, [dispatch, user, error, isDeleted, deleteError, noReloading]);

  const readMoreOnPressHandler = item => {
    props.navigation.navigate('TourDetail', {
      id: item._id,
    });
  };

  const deleteTourOnPressHandler = item => {
    setShowLoaderOnlyOneCard(item?._id);
    dispatch(deleteUserTour(item?._id));
  };

  const updateTourHandler = item => {
    props?.navigation?.navigate('AddUpdateTour', {
      id: item?._id,
      creator: item?.creator,
    });
  };

  return (
    <DashboardMarkup
      {...props}
      user={user}
      loading={noReloading || noReload ? false : loading}
      deleteLoading={deleteLoading}
      tours={tours}
      readMoreOnPressHandler={readMoreOnPressHandler}
      deleteTourOnPressHandler={deleteTourOnPressHandler}
      showLoaderOnlyOneCard={showLoaderOnlyOneCard}
      updateTourHandler={updateTourHandler}
    />
  );
};

export default Dashboard;
