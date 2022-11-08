import React, {useEffect, useState} from 'react';
import ProfileMarkup from './ProfileMarkup';
import DocumentPicker from 'react-native-document-picker';
import ImgToBase64 from 'react-native-image-base64';
import {useDispatch, useSelector} from 'react-redux';
import {ToastAndroid} from 'react-native';
import {
  clearErrors,
  loadUser,
  updateProfile,
} from '../../redux/Action/userAction';
import {UPDATE_USER_RESET} from '../../redux/Constants/userConstant';

const Profile = props => {
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.registerUser);
  const {loading, isUpdated, error} = useSelector(state => state.profile);

  let fistNameAndLastName = user && user?.name?.split(' ');

  const [imageProfile, setImageProfile] = useState(
    user ? user?.imageProfile : '',
  );
  const [imageProfileError, setImageProfileError] = useState('');
  const [firstName, setFirstName] = useState(
    fistNameAndLastName ? fistNameAndLastName[0] : '',
  );
  const [lastName, setLastName] = useState(
    fistNameAndLastName ? fistNameAndLastName[1] : '',
  );
  const [email, setEmail] = useState(user ? user?.email : '');
  const [fistNameError, setFistNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const fistNameOnChange = text => {
    setFirstName(text);
    setFistNameError('');
  };

  const lastNameOnChange = text => {
    setLastName(text);
    setLastNameError('');
  };

  const emailOnChange = text => {
    setEmail(text);
    setEmailError('');
  };

  const chooseProfile = async () => {
    try {
      const results = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setImageProfileError('');
      ImgToBase64.getBase64String(results?.uri)
        .then(async base64String => {
          await setImageProfile(
            'data:' + results.type + ';base64,' + base64String,
          );
        })
        .catch(err => console.log(err));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
        console.log(err, 'pick cancel');
      } else {
        throw err;
      }
    }
  };

  const updateOnPressHandler = () => {
    let em = [...email];
    em = em.filter((e, i) => {
      return e === '@';
    });

    if (!imageProfile) {
      setImageProfileError('Please provide your profile image');
    }

    if (!firstName) {
      setFistNameError('Please provide your first Name');
    }

    if (!lastName) {
      setLastNameError('Please provide your last Name');
    }

    if (!email) {
      setEmailError('Please provide your email');
    }

    if (email && em.length === 0) {
      setEmailError('Required @ in email');
    }

    if (firstName && lastName && email && imageProfile) {
      const data = {
        firstName,
        lastName,
        email,
        imageProfile,
      };
      dispatch(updateProfile(data));
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
      props?.navigation.navigate('Dashboard');
      ToastAndroid.showWithGravityAndOffset(
        'Profile Updated Succeed',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      dispatch({type: UPDATE_USER_RESET});
    }
  }, [dispatch, error, isUpdated]);

  return (
    <ProfileMarkup
      {...props}
      chooseProfile={chooseProfile}
      imageProfile={imageProfile}
      fistNameOnChange={fistNameOnChange}
      lastNameOnChange={lastNameOnChange}
      emailOnChange={emailOnChange}
      firstName={firstName}
      lastName={lastName}
      email={email}
      fistNameError={fistNameError}
      lastNameError={lastNameError}
      emailError={emailError}
      updateOnPressHandler={updateOnPressHandler}
      imageProfileError={imageProfileError}
      user={user}
      loading={loading}
    />
  );
};

export default Profile;
