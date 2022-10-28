import React, {useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, getToursByTagName} from '../../redux/Action/tourAction';
import ToursByTagMarkup from './ToursByTagMarkup';

const ToursByTag = props => {
  const tag = props?.route?.params?.tag;

  const dispatch = useDispatch();
  const {loading, tours, error} = useSelector(state => state.toursByTag);

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

    dispatch(getToursByTagName(tag));
  }, [dispatch, error]);

  return (
    <ToursByTagMarkup {...props} tag={tag} loading={loading} tours={tours} />
  );
};

export default ToursByTag;
