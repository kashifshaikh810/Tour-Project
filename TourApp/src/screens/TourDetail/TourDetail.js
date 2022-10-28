import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, getTourDetail} from '../../redux/Action/tourAction';
import TourDetailMarkup from './TourDetailMarkup';

const TourDetail = props => {
  const dispatch = useDispatch();
  const {loading, tour, error} = useSelector(state => state.tourDetail);

  const id = props?.route?.params?.id;

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

    if (id !== tour._id) {
      dispatch(getTourDetail(id));
    }
  }, [dispatch, error, id]);

  return <TourDetailMarkup {...props} loading={loading} tour={tour} />;
};

export default TourDetail;
