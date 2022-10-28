import React from 'react';
import {View, Text, Pressable, ActivityIndicator} from 'react-native';
import styles from './styles.js';

const MyButton = props => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={props?.onPress}
        android_ripple={{color: props?.android_ripple}}
        style={({pressed}) => [
          {...props?.style},
          {backgroundColor: props?.bgColor},
        ]}>
        {({pressed}) => (
          <View style={styles.textContainer}>
            {props?.loading && (
              <ActivityIndicator
                color="#fff"
                size={20}
                style={styles.activityIndicator}
              />
            )}
            <Text
              style={{
                color: pressed ? props?.afterPressColor : props?.textColor,
              }}>
              {props.title && props.title}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default MyButton;
