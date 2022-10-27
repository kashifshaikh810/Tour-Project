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
import {useDispatch, useSelector} from 'react-redux';
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import {clearErrors, userSignIn} from '../../redux/Action/userAction';
import {SIGNIN_RESET} from '../../redux/Constants/userConstant';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showServerError, setShowServerError] = useState('');

  const dispatch = useDispatch();
  const {loading, isAuthenticated, isLoginSuccess, error} = useSelector(
    state => state.registerUser,
  );

  const emailOnChange = text => {
    setEmail(text);
    setEmailError('');
    setShowServerError('');
  };

  const passwordOnChange = text => {
    setPassword(text);
    setPasswordError('');
    setShowServerError('');
  };

  const loginOnPressHandler = () => {
    let em = [...email];
    em = em.filter((e, i) => {
      return e === '@';
    });

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

    if (email && password && em.length > 0 && password.length >= 8) {
      const data = {
        email,
        password,
      };
      dispatch(userSignIn(data));
    }
  };

  useEffect(() => {
    if (error) {
      setShowServerError(error);
      dispatch(clearErrors());
    }

    if (isLoginSuccess) {
      props.navigation.navigate('Home');
      setEmail('');
      setPassword('');
      ToastAndroid.showWithGravityAndOffset(
        'Signin Succeed',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      dispatch({type: SIGNIN_RESET});
    }
  }, [dispatch, error, isLoginSuccess]);

  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <View>
            <View style={styles.headingAndIconContainer}>
              <UserIcon name="user-circle" size={50} />
              <Text style={styles.headingText}>Sign In</Text>
            </View>

            <View>
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
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
                secureTextEntry
                style={[
                  styles.textInput,
                  passwordError !== '' && styles.borderRedColor,
                ]}
                placeholderTextColor={passwordError.length > 1 ? 'red' : 'gray'}
                value={password}
                onChangeText={text => passwordOnChange(text)}
              />
              {passwordError && (
                <Text style={styles.errorText}>{passwordError}</Text>
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
            title="LOGIN"
            bgColor="gray"
            textColor="#fff"
            afterPressColor="#b3b3b3"
            android_ripple="#b3b3b3"
            style={styles.button}
            onPress={() => loginOnPressHandler()}
            loading={loading}
          />

          <View style={styles.divider} />

          <View style={styles.already}>
            <Text style={styles.alreadyText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={styles.signIn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
