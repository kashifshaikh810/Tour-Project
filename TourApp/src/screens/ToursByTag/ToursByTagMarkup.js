import React from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import Header from '../../components/Header/Header';
import styles from './styles';
import MyButton from '../../components/MyButton/MyButton';

const ToursByTagMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <View style={styles.tourHeadingContainer}>
        <Text style={styles.tourHeading}>Tours with tag : {props?.tag}</Text>
      </View>

      {props?.loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={props?.tours}
          renderItem={({item, index}) => (
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Image source={{uri: item.imageFile}} style={styles.image} />

                <View>
                  <Text
                    numberOfLines={1}
                    style={[styles.title, styles.marginTop]}>
                    {item.title}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[styles.title, styles.marginTop]}>
                    {item.description}
                  </Text>
                  <MyButton
                    title="READ MORE"
                    bgColor="skyblue"
                    textColor="#fff"
                    afterPressColor="#f3f3f3"
                    android_ripple="#f3f3f3"
                    style={styles.button}
                    onPress={() => {}}
                  />
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ToursByTagMarkup;
