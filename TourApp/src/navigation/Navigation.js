import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';
import ToursByTag from '../screens/ToursByTag/ToursByTag';
import Home from '../screens/Home/Home';
import {useSelector} from 'react-redux';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const {isAuthenticated} = useSelector(state => state.registerUser);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        {isAuthenticated === false && (
          <Stack.Screen name="Login" component={Login} />
        )}
        {isAuthenticated === false && (
          <Stack.Screen name="SignUp" component={SignUp} />
        )}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ToursByTag" component={ToursByTag} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
