import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import SearchIcon from 'react-native-vector-icons/FontAwesome';

const Header = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.tourTextStyle}>Tour</Text>
      </View>

      <View style={styles.lastContent}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.textStyle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>
        <TextInput placeholder="Search Tour" style={styles.input} />
        <TouchableOpacity>
          <SearchIcon name="search" size={30} style={styles.textStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
