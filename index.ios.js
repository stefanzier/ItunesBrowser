/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  StatusBar,
  NavigatorIOS,
  AlertIOS 
} from 'react-native';

import styles from './styles';

import MediaListView from './media_list_view';

// Settings StatusBar color
StatusBar.barStyle = 'light-content';


class ItunesBrowser extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.mainContainer}
        barTintColor = "#2A3744"
        tintColor="#EFEFEF"
        titleTextColor="#EFEFEF"
        initialRoute={{
          component: MediaListView,
          title: 'iTunesBrowser',
          rightButtonTitle: 'Search',
          onRightButtonPress: () => AlertIOS.prompt(
              'Search', 'you pressed the search button'
            )
        }}
      />
    );
  }
}

AppRegistry.registerComponent('ItunesBrowser', () => ItunesBrowser);
