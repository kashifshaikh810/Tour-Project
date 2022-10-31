import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';
import EditIcon from 'react-native-vector-icons/FontAwesome5';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    imageFile: 'https://picsum.photos/seed/picsum/200/300',
    title: 'hello world',
    description: 'abcdeeeffjejf',
  },
];

const DashboardMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Dashboard: {props?.name}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <View style={styles.card}>
              <Image source={{uri: item.imageFile}} style={styles.imageFile} />
              <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>

                <View style={styles.descriptionContainer}>
                  <Text style={styles.title}>{item.description}</Text>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity>
                      <DeleteIcon
                        name="delete"
                        color="red"
                        size={22}
                        style={styles.marginRight}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <EditIcon name="edit" color="skyblue" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default DashboardMarkup;
