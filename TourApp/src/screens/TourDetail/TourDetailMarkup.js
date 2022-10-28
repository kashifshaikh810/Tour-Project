import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';
import BackIcon from 'react-native-vector-icons/Ionicons';
import CalenderIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TourDetailMarkup = props => {
  const tags = ['Washing Turn', 'South'];
  return (
    <View style={styles.container}>
      <Header {...props} />

      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <View>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={styles.image}
            />
          </View>

          <View style={styles.iconAndTitleContainer}>
            <TouchableOpacity>
              <BackIcon
                name="chevron-back"
                size={25}
                color="#4f4f4f"
                style={styles.icon}
              />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>title</Text>
            </View>
          </View>

          <View style={styles.createdByContainer}>
            <Text style={styles.createdBy}>Created By - name</Text>
          </View>

          <View style={styles.tagsContainer}>
            {tags.map((tag, i) => (
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
            <Text style={styles.day}>1 day ago</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TourDetailMarkup;
