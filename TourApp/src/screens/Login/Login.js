import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header/Header';
import MyButton from '../../components/MyButton/MyButton';
import styles from './styles';
import UserIcon from 'react-native-vector-icons/FontAwesome5';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailOnChange = text => {
    setEmail(text);
    setEmailError('');
  };

  const passwordOnChange = text => {
    setPassword(text);
    setPasswordError('');
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

    if (password && password.length !== 8) {
      setPasswordError('Password at least 8 characters long.');
    }

    if (email && password) {
      console.log('hi');
    }
  };

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
          <MyButton
            {...props}
            title="LOGIN"
            bgColor="gray"
            textColor="#fff"
            afterPressColor="#b3b3b3"
            android_ripple="#b3b3b3"
            style={styles.button}
            onPress={() => loginOnPressHandler()}
            loading={false}
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
