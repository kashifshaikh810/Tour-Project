import React, {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearErrors,
  loadUser,
  updatePassword,
} from '../../redux/Action/userAction';
import {UPDATE_PASSWORD_RESET} from '../../redux/Constants/userConstant';
import UpdatePasswordMarkup from './UpdatePasswordMarkup';

const UpdatePassword = props => {
  const dispatch = useDispatch();
  const {loading, isUpdated, error} = useSelector(state => state.profile);

  const [oldPassword, setOldPassword] = useState('');
  const [oldPasswordError, setOldPasswordError] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const oldPasswordOnChange = text => {
    setOldPassword(text);
    setOldPasswordError('');
  };

  const newPasswordOnChange = text => {
    setNewPassword(text);
    setNewPasswordError('');
  };

  const confirmPasswordOnChange = text => {
    setConfirmPassword(text);
    setConfirmPasswordError('');
  };

  const updateOnPressHandler = () => {
    if (!oldPassword) {
      setOldPasswordError('Please provide your old password');
    }

    if (oldPassword && oldPassword.length < 8) {
      setOldPasswordError('Old Password at least 8 characters long.');
    }

    if (!newPassword) {
      setNewPasswordError('Please provide your new password');
    }

    if (newPassword && newPassword.length < 8) {
      setNewPasswordError('New Password at least 8 characters long.');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please provide your confirm password');
    }

    if (confirmPassword && confirmPassword.length < 8) {
      setConfirmPasswordError('Confirm Password at least 8 characters long.');
    }

    if (oldPassword && newPassword && confirmPassword) {
      const passwordData = {
        oldPassword,
        newPassword,
        confirmPassword,
      };
      dispatch(updatePassword(passwordData));
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

    if (isUpdated) {
      dispatch(loadUser());
      props.navigation.navigate('Dashboard');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      ToastAndroid.showWithGravityAndOffset(
        'Password Updated Succeed',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      dispatch({type: UPDATE_PASSWORD_RESET});
    }
  }, [dispatch, error, isUpdated]);

  return (
    <UpdatePasswordMarkup
      {...props}
      oldPassword={oldPassword}
      setOldPassword={setOldPassword}
      oldPasswordError={oldPasswordError}
      setOldPasswordError={setOldPasswordError}
      newPassword={newPassword}
      setNewPassword={setNewPassword}
      newPasswordError={newPasswordError}
      setNewPasswordError={setNewPasswordError}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      confirmPasswordError={confirmPasswordError}
      setConfirmPasswordError={setConfirmPasswordError}
      oldPasswordOnChange={oldPasswordOnChange}
      newPasswordOnChange={newPasswordOnChange}
      confirmPasswordOnChange={confirmPasswordOnChange}
      updateOnPressHandler={updateOnPressHandler}
      loading={loading}
    />
  );
};

export default UpdatePassword;
