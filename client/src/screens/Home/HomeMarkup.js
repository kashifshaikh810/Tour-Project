import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header/Header';
import styles from './styles';
import LikeAndDislikeIcon from 'react-native-vector-icons/AntDesign';

const HomeMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />

      <ScrollView>
        <View style={styles.tourHeadingContainer}>
          <Text style={styles.tourHeading}>Popular Tags</Text>
        </View>

        {props?.tagLoading ? (
          <ActivityIndicator size={30} color="gray" />
        ) : (
          <FlatList
            data={props?.tags && props?.tags}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={styles.tagContainer}
                onPress={() => {
                  props.navigation.navigate('ToursByTag', {tag: item});
                }}>
                <Text style={styles.tagItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}

        <View style={[styles.tourHeadingContainer, {marginTop: 0}]}>
          <Text style={styles.tourHeading}>Tours</Text>
        </View>

        {props?.loading ? (
          <ActivityIndicator size={30} color="gray" />
        ) : (
          <FlatList
            data={props.tours && props.tours}
            renderItem={({item, index}) => (
              <View style={styles.card}>
                <Image
                  source={{uri: item.imageFile}}
                  style={styles.tourImage}
                />
                <View style={styles.nameContainer}>
                  <Text style={styles.name}>Tour By ~ {item.name}</Text>
                </View>
                <View style={styles.tagsContainer}>
                  {item.tags &&
                    item.tags.map((tag, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          style={styles.fix}
                          onPress={() =>
                            props.navigation.navigate('ToursByTag', {tag: tag})
                          }>
                          <Text style={styles.tagText}>#{tag}</Text>
                        </TouchableOpacity>
                      );
                    })}
                </View>
                <TouchableOpacity
                  disabled={!props?.isAuthenticated}
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
                  {item.likes.length >= 2 ? (
                    <Text>
                      {' '}
                      {`${
                        item?.likes.find(like => like === props?.userId)
                          ? 'You and'
                          : ''
                      } ${
                        props?.isAuthenticated
                          ? item.likes.length - 1
                          : item.likes.length
                      } ${
                        item.likes.length >= 2 ? 'other people likes' : ''
                      }  `}
                    </Text>
                  ) : (
                    <>
                      <Text style={styles.like}>{item?.likes?.length}</Text>
                      <Text style={styles.like}>
                        {item?.likes?.length <= 1 ? 'Like' : 'Likes'}
                      </Text>
                    </>
                  )}
                </TouchableOpacity>

                <View style={styles.titleAndDescriptionContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.flexRow}>
                    <Text numberOfLines={2} style={styles.description}>
                      {item.description}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate('TourDetail', {id: item._id})
                      }>
                      <Text style={styles.readMore}>Read More</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeMarkup;
