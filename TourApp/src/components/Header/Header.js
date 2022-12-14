import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, userLogout} from '../../redux/Action/userAction';
import {LOGOUT_USER_RESET} from '../../redux/Constants/userConstant';
import {getTours} from '../../redux/Action/tourAction';

const Header = props => {
  const dispatch = useDispatch();
  const {loading, isAuthenticated, isLogout, error} = useSelector(
    state => state.registerUser,
  );

  const logout = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    if (isLogout) {
      props.navigation.navigate('Login');
      ToastAndroid.showWithGravityAndOffset(
        'Logout Succeed',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      dispatch({type: LOGOUT_USER_RESET});
    }

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
  }, [isLogout, error]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(getTours());
          props.navigation.navigate('Home');
        }}>
        <Text style={styles.textStyle}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          isAuthenticated === false
            ? props.navigation.navigate('Login')
            : props.navigation.navigate('AddUpdateTour')
        }>
        <Text style={styles.textStyle}>
          {isAuthenticated === false ? 'Login' : 'Add Tour'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Dashboard')}>
        <Text style={styles.textStyle}>
          {isAuthenticated === true && 'Dashboard'}
        </Text>
      </TouchableOpacity>

      <View style={styles.logOutContainer}>
        <TouchableOpacity onPress={() => logout()}>
          <Text style={styles.textStyle}>
            {loading && isAuthenticated === true ? (
              <ActivityIndicator />
            ) : (
              isAuthenticated === true && 'Logout'
            )}
          </Text>
        </TouchableOpacity>
        {isAuthenticated === true && (
          <TouchableOpacity
            style={styles.search}
            onPress={() => {
              dispatch(getTours());
              props?.navigation?.navigate('Search');
            }}>
            <Text style={styles.textStyle}>Search</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
