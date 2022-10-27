import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Header from '../../components/Header/Header';
import styles from './styles';
import LikeAndDislikeIcon from 'react-native-vector-icons/AntDesign';

const HomeMarkup = props => {
  console.log(props.tours);
  return (
    <View style={styles.container}>
      <Header {...props} />

      <View style={styles.tourHeadingContainer}>
        <Text style={styles.tourHeading}>Tours</Text>
      </View>

      <FlatList
        data={props.tours && props.tours}
        renderItem={({item, index}) => (
          <View style={styles.card}>
            <Image source={{uri: item.imageFile}} style={styles.tourImage} />
            <View style={styles.tagsContainer}>
              {item.tags &&
                item.tags.map(tag => {
                  return (
                    <TouchableOpacity>
                      <Text style={styles.tagText}>#{tag}</Text>
                    </TouchableOpacity>
                  );
                })}

              <TouchableOpacity style={styles.likeContainer}>
                <LikeAndDislikeIcon name="like2" size={20} color="blue" />
                <Text style={styles.like}>2</Text>
                <Text style={styles.like}>Likes</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.titleAndDescriptionContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.flexRow}>
                <Text numberOfLines={2} style={styles.description}>
                  {item.description}
                </Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.readMore}>Read More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default HomeMarkup;