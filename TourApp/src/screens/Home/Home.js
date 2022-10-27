import React, {useEffect} from 'react';
import HomeMarkup from './HomeMarkup';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, getTours} from '../../redux/Action/tourAction';
import {ToastAndroid} from 'react-native';

const Home = props => {
  const dispatch = useDispatch();
  const {loading, tours, error} = useSelector(state => state.allTours);

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

    dispatch(getTours());
  }, [dispatch, error]);

  return <HomeMarkup {...props} loading={loading} tours={tours} />;
};

export default Home;
