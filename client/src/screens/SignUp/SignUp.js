import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Header from '../../components/Header/Header';
import MyButton from '../../components/MyButton/MyButton';
import styles from './styles';
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, userSignUp} from '../../redux/Action/userAction';
import {SIGNUP_RESET} from '../../redux/Constants/userConstant';
import {getTours} from '../../redux/Action/tourAction';

const SignUp = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fistNameError, setFistNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showServerError, setShowServerError] = useState('');

  const dispatch = useDispatch();
  const {loading, isRegisterSuccess, error} = useSelector(
    state => state.registerUser,
  );

  const fistNameOnChange = text => {
    setFirstName(text);
    setShowServerError('');
    setFistNameError('');
  };

  const lastNameOnChange = text => {
    setLastName(text);
    setShowServerError('');
    setLastNameError('');
  };

  const emailOnChange = text => {
    setEmail(text);
    setShowServerError('');
    setEmailError('');
  };

  const passwordOnChange = text => {
    setPassword(text);
    setShowServerError('');
    setPasswordError('');
  };

  const confirmPasswordOnChange = text => {
    setConfirmPassword(text);
    setShowServerError('');
    setConfirmPasswordError('');
  };

  const registerOnPressHandler = () => {
    let em = [...email];
    em = em.filter((e, i) => {
      return e === '@';
    });

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

    if (!password) {
      setPasswordError('Please provide your password');
    }

    if (password && password.length < 8) {
      setPasswordError('Password at least 8 characters long.');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please provide your confirm password');
    }

    if (confirmPassword && confirmPassword.length < 8) {
      setConfirmPasswordError('confirm Password at least 8 characters long.');
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError('Confirm Password does not match');
    }

    if (firstName && lastName && email && password && confirmPassword) {
      const data = {
        firstName,
        lastName,
        email,
        password,
      };
      dispatch(userSignUp(data));
    }
  };

  useEffect(() => {
    if (error) {
      setShowServerError(error);
      dispatch(clearErrors());
    }

    if (isRegisterSuccess) {
      dispatch(getTours());
      dispatch(loadUser());
      props.navigation.navigate('Home');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      ToastAndroid.showWithGravityAndOffset(
        'Register Succeed',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      dispatch({type: SIGNUP_RESET});
    }
  }, [dispatch, error, isRegisterSuccess]);

  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <View>
            <View style={styles.headingAndIconContainer}>
              <UserIcon name="user-circle" size={50} />
              <Text style={styles.headingText}>Sign Up</Text>
            </View>

            <View>
              <TextInput
                placeholder="First Name"
                style={[
                  styles.textInput,
                  fistNameError !== '' && styles.borderRedColor,
                ]}
                placeholderTextColor={
                  fistNameError.length >= 1 ? 'red' : 'gray'
                }
                value={firstName}
                onChangeText={text => fistNameOnChange(text)}
              />
              {fistNameError && (
                <Text style={styles.errorText}>{fistNameError}</Text>
              )}
            </View>

            <View>
              <TextInput
                placeholder="Last Name"
                style={[
                  styles.textInput,
                  lastNameError !== '' && styles.borderRedColor,
                ]}
                placeholderTextColor={lastNameError.length > 1 ? 'red' : 'gray'}
                value={lastName}
                onChangeText={text => lastNameOnChange(text)}
              />
              {lastNameError && (
                <Text style={styles.errorText}>{lastNameError}</Text>
              )}
            </View>

            <View>
              <TextInput
                placeholder="Email"
                style={[
                  styles.textInput,
                  emailError !== '' && styles.borderRedColor,
                ]}
                placeholderTextColor={emailError.length > 1 ? 'red' : 'gray'}
                value={email}
                onChangeText={text => emailOnChange(text)}
              />
              {emailError && <Text style={styles.errorText}>{emailError}</Text>}
            </View>

            <View>
              <TextInput
                placeholder="Password"
                style={[
                  styles.textInput,
                  passwordError !== '' && styles.borderRedColor,
                ]}
                placeholderTextColor={passwordError.length > 1 ? 'red' : 'gray'}
                value={password}
                secureTextEntry
                onChangeText={text => passwordOnChange(text)}
              />
              {passwordError && (
                <Text style={styles.errorText}>{passwordError}</Text>
              )}
            </View>

            <View>
              <TextInput
                placeholder="Confirm Password"
                style={[
                  styles.textInput,
                  confirmPasswordError !== '' && styles.borderRedColor,
                ]}
                placeholderTextColor={
                  confirmPasswordError.length > 1 ? 'red' : 'gray'
                }
                value={confirmPassword}
                secureTextEntry
                onChangeText={text => confirmPasswordOnChange(text)}
              />
              {confirmPasswordError && (
                <Text style={styles.errorText}>{confirmPasswordError}</Text>
              )}
            </View>
          </View>

          {showServerError && (
            <Text style={[styles.errorText, {textAlign: 'center'}]}>
              {showServerError}
            </Text>
          )}

          <MyButton
            {...props}
            title="REGISTER"
            bgColor="gray"
            textColor="#fff"
            afterPressColor="#b3b3b3"
            android_ripple="#b3b3b3"
            style={styles.button}
            onPress={() => registerOnPressHandler()}
            loading={loading}
          />

          <View style={styles.divider} />

          <View style={styles.already}>
            <Text style={styles.alreadyText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.signIn}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
