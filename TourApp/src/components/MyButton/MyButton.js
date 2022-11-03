import React from 'react';
import {View, Text, Pressable, ActivityIndicator} from 'react-native';
import styles from './styles';

const MyButton = props => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={props?.onPress}
        android_ripple={{color: props?.android_ripple}}
        style={({pressed}) => [
          props?.isCustomize ? props?.style : {...props?.style},
          {backgroundColor: props?.bgColor},
          !props?.isNoEffected &&
            !props?.isReadMoreButton &&
            pressed &&
            styles.maxWidth,
          !props?.isNoEffected &&
            !props?.isReadMoreButton &&
            pressed &&
            styles.maxHeight,
          !props?.isNoEffected &&
            props?.isReadMoreButton &&
            pressed &&
            styles.readMoreMaxWidth,
          !props?.isNoEffected &&
            props?.isReadMoreButton &&
            pressed &&
            styles.readMoreMaxHeight,
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
