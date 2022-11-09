import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';
import MyButton from '../../components/MyButton/MyButton';

const UpdatePasswordMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />

      <ScrollView style={styles.scrollView}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Update Password</Text>
        </View>

        <View style={styles.divider} />

        <View>
          <TextInput
            placeholder="Old Password"
            secureTextEntry
            style={[
              styles.textInput,
              props?.oldPasswordError !== '' && styles.borderRedColor,
            ]}
            placeholderTextColor={
              props?.oldPasswordError?.length > 1 ? 'red' : 'gray'
            }
            value={props?.oldPassword}
            onChangeText={text => props?.oldPasswordOnChange(text)}
          />
          {props?.oldPasswordError && (
            <Text style={styles.errorText}>{props?.oldPasswordError}</Text>
          )}
        </View>

        <View>
          <TextInput
            placeholder="New Password"
            secureTextEntry
            style={[
              styles.textInput,
              props?.newPasswordError !== '' && styles.borderRedColor,
            ]}
            placeholderTextColor={
              props?.newPasswordError?.length > 1 ? 'red' : 'gray'
            }
            value={props?.newPassword}
            onChangeText={text => props?.newPasswordOnChange(text)}
          />
          {props?.newPasswordError && (
            <Text style={styles.errorText}>{props?.newPasswordError}</Text>
          )}
        </View>

        <View>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={[
              styles.textInput,
              props?.confirmPasswordError !== '' && styles.borderRedColor,
            ]}
            placeholderTextColor={
              props?.confirmPasswordError?.length > 1 ? 'red' : 'gray'
            }
            value={props?.confirmPassword}
            onChangeText={text => props?.confirmPasswordOnChange(text)}
          />
          {props?.confirmPasswordError && (
            <Text style={styles.errorText}>{props?.confirmPasswordError}</Text>
          )}
        </View>

        <MyButton
          {...props}
          title="UPDATE"
          bgColor="gray"
          textColor="#fff"
          afterPressColor="#b3b3b3"
          android_ripple="#b3b3b3"
          style={styles.button}
          onPress={() => props?.updateOnPressHandler()}
          loading={props?.loading}
        />

        {/* divider */}
        <View style={styles.divider} />

        <View style={styles.already}>
          <Text style={styles.alreadyText}>No Need To Change?</Text>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={styles.signIn}>GoBack</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdatePasswordMarkup;
