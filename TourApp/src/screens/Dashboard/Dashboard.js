import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, getCurrentUserTour} from '../../redux/Action/tourAction';
import DashboardMarkup from './DashboardMarkup';

const Dashboard = props => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.registerUser);
  const {loading, tours, error} = useSelector(state => state.currentUserTours);

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

    dispatch(getCurrentUserTour(user?._id));
  }, [dispatch, user, error]);

  const readMoreOnPressHandler = item => {
    props.navigation.navigate('TourDetail', {
      id: item._id,
    });
  };

  return (
    <DashboardMarkup
      {...props}
      name={user?.name}
      loading={loading}
      tours={tours}
      readMoreOnPressHandler={readMoreOnPressHandler}
    />
  );
};

export default Dashboard;
