import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';
import EditIcon from 'react-native-vector-icons/FontAwesome5';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyButton from '../../components/MyButton/MyButton';

const DashboardMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Dashboard: {props?.name}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {props?.loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={props?.tours}
            renderItem={({item, index}) => (
              <View style={styles.card}>
                <Image
                  source={{uri: item.imageFile}}
                  style={styles.imageFile}
                />
                <View style={styles.contentContainer}>
                  <Text
                    style={[styles.title, styles.onlyOneLine]}
                    numberOfLines={1}>
                    {item.title}
                  </Text>

                  <View style={styles.descriptionContainer}>
                    <Text
                      style={[styles.title, styles.onlyOneLine]}
                      numberOfLines={1}>
                      {item.description}
                    </Text>
                    <View style={styles.buttonAndIcons}>
                      <MyButton
                        title="READ MORE"
                        bgColor="rgb(85, 172, 238)"
                        textColor="#fff"
                        afterPressColor="#b3b3b3"
                        android_ripple="#f3f3f3"
                        style={styles.button}
                        isNoEffected={true}
                        onPress={() => props?.readMoreOnPressHandler(item)}
                      />
                      <View style={styles.iconContainer}>
                        <TouchableOpacity
                          onPress={() => props.deleteTourOnPressHandler(item)}>
                          {props?.deleteLoading &&
                          props?.showLoaderOnlyOneCard === item?._id ? (
                            <ActivityIndicator style={styles.marginLeft} />
                          ) : (
                            <DeleteIcon
                              name="delete"
                              color="rgb(221, 75, 57)"
                              size={22}
                              style={styles.marginLeft}
                            />
                          )}
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => props?.updateTourHandler(item)}>
                          <EditIcon
                            name="edit"
                            color="rgb(85, 172, 238)"
                            size={20}
                            style={styles.marginLeft}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
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

export default DashboardMarkup;
