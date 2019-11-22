import React, {Component} from 'react';

import { SafeAreaView } from 'react-native';
import {Provider} from 'react-redux';
import Home from './pages/home_screen/index';
import configureStore from './store';

const store = configureStore();

export default class index extends Component {
  render() {
    return (
      <SafeAreaView>
        <Provider store={store}>
          <Home />
        </Provider>
      </SafeAreaView>
    );
  }
}
