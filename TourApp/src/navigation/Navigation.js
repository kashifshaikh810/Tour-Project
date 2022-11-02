import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';
import ToursByTag from '../screens/ToursByTag/ToursByTag';
import TourDetail from '../screens/TourDetail/TourDetail';
import Home from '../screens/Home/Home';
import {useSelector} from 'react-redux';
import Dashboard from '../screens/Dashboard/Dashboard';
import AddUpdateTour from '../screens/AddUpdateTour/AddUpdateTour';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const {user, isAuthenticated} = useSelector(state => state.registerUser);

  console.log(user);
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
        <Stack.Screen name="TourDetail" component={TourDetail} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AddUpdateTour" component={AddUpdateTour} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
