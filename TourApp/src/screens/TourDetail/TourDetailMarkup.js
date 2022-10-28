import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';
import BackIcon from 'react-native-vector-icons/Ionicons';
import CalenderIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

const TourDetailMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />

      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <View>
            <Image
              source={{uri: props?.tour?.imageFile}}
              style={styles.image}
            />
          </View>

          <View style={styles.iconAndTitleContainer}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
              <BackIcon
                name="chevron-back"
                size={25}
                color="#4f4f4f"
                style={styles.icon}
              />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props?.tour?.title}</Text>
            </View>
          </View>

          <View style={styles.createdByContainer}>
            <Text style={styles.createdBy}>
              Created By - {props?.tour?.name}
            </Text>
          </View>

          <View style={styles.tagsContainer}>
            {props?.tour?.tags?.map((tag, i) => (
              <View key={i}>
                <Text style={styles.tags}>#{tag}</Text>
              </View>
            ))}
          </View>

          <View style={styles.calenderContainer}>
            <CalenderIcon
              name="calendar-month"
              size={25}
              color="#4f4f4f"
              style={styles.icon}
            />
            <Text style={styles.day}>
              {moment(props?.tour?.createdAt).fromNow()}
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{props?.tour?.description}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TourDetailMarkup;
