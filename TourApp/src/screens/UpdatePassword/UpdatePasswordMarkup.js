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
              props?.passwordError !== '' && styles.borderRedColor,
            ]}
            placeholderTextColor={
              props?.passwordError?.length > 1 ? 'red' : 'gray'
            }
            value={props?.password}
            onChangeText={text => props?.passwordOnChange(text)}
          />
          {props?.passwordError && (
            <Text style={styles.errorText}>{props?.passwordError}</Text>
          )}
        </View>

        <View>
          <TextInput
            placeholder="New Password"
            secureTextEntry
            style={[
              styles.textInput,
              props?.passwordError !== '' && styles.borderRedColor,
            ]}
            placeholderTextColor={
              props?.passwordError?.length > 1 ? 'red' : 'gray'
            }
            value={props?.password}
            onChangeText={text => props?.passwordOnChange(text)}
          />
          {props?.passwordError && (
            <Text style={styles.errorText}>{props?.passwordError}</Text>
          )}
        </View>

        <View>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={[
              styles.textInput,
              props?.passwordError !== '' && styles.borderRedColor,
            ]}
            placeholderTextColor={
              props?.passwordError?.length > 1 ? 'red' : 'gray'
            }
            value={props?.password}
            onChangeText={text => props?.passwordOnChange(text)}
          />
          {props?.passwordError && (
            <Text style={styles.errorText}>{props?.passwordError}</Text>
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
          onPress={() => {}}
          loading={false}
        />

        {/*  divider means line */}
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
