import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';

const SearchScreenMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />

      <View style={styles.searchHeading}>
        <Text style={styles.search}>Search Tour</Text>
      </View>
    </View>
  );
};

export default SearchScreenMarkup;
