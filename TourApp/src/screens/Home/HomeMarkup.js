import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Header from '../../components/Header/Header';
import styles from './styles';
import LikeAndDislikeIcon from 'react-native-vector-icons/AntDesign';

const HomeMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />

      <View style={styles.tourHeadingContainer}>
        <Text style={styles.tourHeading}>Tours</Text>
      </View>

      {props?.loading ? (
        <ActivityIndicator size={30} color="gray" />
      ) : (
        <FlatList
          data={props.tours && props.tours}
          renderItem={({item, index}) => (
            <View style={styles.card}>
              <Image source={{uri: item.imageFile}} style={styles.tourImage} />
              <View style={styles.tagsContainer}>
                {item.tags &&
                  item.tags.map((tag, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() =>
                          props.navigation.navigate('ToursByTag', {tag: tag})
                        }>
                        <Text style={styles.tagText}>#{tag}</Text>
                      </TouchableOpacity>
                    );
                  })}

                <TouchableOpacity
                  style={styles.likeContainer}
                  onPress={() => props.likeOnPressHandler(item)}>
                  <LikeAndDislikeIcon
                    name={
                      item?.likes.find(like => like === props?.userId)
                        ? 'like1'
                        : 'like2'
                    }
                    size={20}
                    color="blue"
                  />
                  <Text style={styles.like}>{item?.likes?.length}</Text>
                  <Text style={styles.like}>
                    {item?.likes?.length <= 1 ? 'Like' : 'Likes'}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.titleAndDescriptionContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.flexRow}>
                  <Text numberOfLines={2} style={styles.description}>
                    {item.description}
                    {item.description.length < 40 && (
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate('TourDetail', {
                            id: item._id,
                          })
                        }>
                        <Text style={styles.readMore}>Read More</Text>
                      </TouchableOpacity>
                    )}
                  </Text>
                  {item.description.length < 30 ? null : (
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate('TourDetail', {id: item._id})
                      }>
                      <Text style={styles.readMore}>Read More</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default HomeMarkup;
