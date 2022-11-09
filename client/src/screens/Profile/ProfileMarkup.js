import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';
import UploadIcon from 'react-native-vector-icons/MaterialIcons';
import MyButton from '../../components/MyButton/MyButton';
import moment from 'moment';

const ProfileMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />

      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.updateProfileHeading}>
          <Text style={styles.updateProfile}>Update Profile</Text>
        </View>

        <View>
          <ImageBackground
            source={{
              uri: props?.imageProfile
                ? props?.imageProfile
                : 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&uid=R24724804&ga=GA1.2.35158520.1667836829',
            }}
            style={styles.profileImage}
            resizeMode="center"
            imageStyle={styles.imageStyle}>
            <View style={styles.profileEditIconContainer}>
              <Pressable
                onPress={() => props?.chooseProfile()}
                style={({pressed}) => [
                  styles.EditProfileIcon,
                  {
                    backgroundColor: pressed
                      ? 'rgba(0,0,0,0.700)'
                      : 'rgba(0,0,0,0.500)',
                  },
                ]}>
                {({pressed}) => (
                  <UploadIcon
                    name="upload-file"
                    color={pressed ? '#fff' : '#b3b3b3'}
                    size={30}
                  />
                )}
              </Pressable>
            </View>
          </ImageBackground>
        </View>
        {props?.imageProfileError && (
          <Text
            style={[styles.errorText, {textAlign: 'center', marginRight: 30}]}>
            {props?.imageProfileError}
          </Text>
        )}

        {props?.user?.updatedAt && (
          <View style={styles.updatedAtContainer}>
            <Text style={styles.updatedAt}>
              Last Updated ~ {moment(props?.user?.updatedAt).fromNow()}
            </Text>
          </View>
        )}

        <View>
          <TextInput
            placeholder="First Name"
            style={[
              styles.textInput,
              props?.user?.updatedAt && {marginTop: 0},
              props?.fistNameError !== '' && styles.borderRedColor,
            ]}
            placeholderTextColor={
              props?.fistNameError?.length >= 1 ? 'red' : 'gray'
            }
            value={props?.firstName}
            onChangeText={text => props?.fistNameOnChange(text)}
          />
          {props?.fistNameError && (
            <Text style={styles.errorText}>{props?.fistNameError}</Text>
          )}
        </View>

        <View>
          <TextInput
            placeholder="Last Name"
            style={[
              styles.textInput,
              props?.lastNameError !== '' && styles.borderRedColor,
            ]}
            placeholderTextColor={
              props?.lastNameError?.length > 1 ? 'red' : 'gray'
            }
            value={props?.lastName}
            onChangeText={text => props?.lastNameOnChange(text)}
          />
          {props?.lastNameError && (
            <Text style={styles.errorText}>{props?.lastNameError}</Text>
          )}
        </View>

        <View>
          <TextInput
            placeholder="Email"
            style={[
              styles.textInput,
              props?.emailError !== '' && styles.borderRedColor,
            ]}
            placeholderTextColor={
              props?.emailError?.length > 1 ? 'red' : 'gray'
            }
            value={props?.email}
            onChangeText={text => props?.emailOnChange(text)}
          />
          {props?.emailError && (
            <Text style={styles.errorText}>{props?.emailError}</Text>
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
      </ScrollView>
    </View>
  );
};

export default ProfileMarkup;
