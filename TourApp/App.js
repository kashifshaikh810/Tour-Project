import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/Navigation';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Navigation />
    </Provider>
  );
};

export default App;
