import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import LikeAndDislikeIcon from 'react-native-vector-icons/AntDesign';

const SearchScreenMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />

      <View style={styles.searchHeading}>
        <Text style={styles.search}>Search Tour</Text>
      </View>

      <View>
        <View style={styles.inputAndIconContainer}>
          <TextInput
            placeholder="Search"
            keyboardType="default"
            style={[
              styles.textInput,
              props?.searchError !== '' && styles.borderRedColor,
            ]}
            placeholderTextColor={
              props?.searchError.length > 1 ? 'red' : 'gray'
            }
            value={props?.search}
            onChangeText={text => props?.searchOnChange(text)}
          />
          <TouchableOpacity onPress={() => props?.searchOnPressHandler()}>
            <SearchIcon name="search" size={35} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {props?.searchError && (
          <Text
            style={[
              styles.errorText,
              props?.searchError && {marginBottom: 10},
            ]}>
            {props?.searchError}
          </Text>
        )}
      </View>

      {props?.loading ? (
        <ActivityIndicator size={30} color="gray" style={styles.loader} />
      ) : (
        <FlatList
          data={props.tours && props.tours}
          renderItem={({item, index}) => (
            <View style={styles.card}>
              <Image source={{uri: item?.imageFile}} style={styles.tourImage} />
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
                    } ${item.likes.length >= 2 ? 'other people likes' : ''}  `}
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
    </View>
  );
};

export default SearchScreenMarkup;
