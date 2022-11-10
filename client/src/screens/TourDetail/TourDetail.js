import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearErrors,
  getRelatedTours,
  getTourDetail,
} from '../../redux/Action/tourAction';
import TourDetailMarkup from './TourDetailMarkup';

const TourDetail = props => {
  const dispatch = useDispatch();

  const {loading, tour, error} = useSelector(state => state.tourDetail);

  const {
    loading: relatedTourLoading,
    relatedTour,
    error: relatedTourError,
  } = useSelector(state => state.relatedTours);

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

    if (relatedTourError) {
      ToastAndroid.showWithGravityAndOffset(
        relatedTourError,
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

    if (tour.tags) {
      dispatch(getRelatedTours(tour?.tags));
    }
  }, [dispatch, error, id, tour, relatedTourError]);

  return (
    <TourDetailMarkup
      {...props}
      loading={loading ? loading : relatedTourLoading}
      tour={tour}
      relatedTour={relatedTour}
    />
  );
};

export default TourDetail;
