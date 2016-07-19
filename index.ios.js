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
  StatusBar  
} from 'react-native';

import styles from './styles';

class ItunesBrowser extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.appearance}>
          <Text style={styles.button}></Text>
          <Text style={styles.title}>ItunesBrowser</Text>
          <Text style={styles.button}>Search</Text>
        </View>        

        <View style={styles.content}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sint ipsa? Soluta culpa ea velit recusandae quos dolores iste assumenda ipsum cupiditate sunt neque ducimus, nisi fugit cumque dignissimos nam.
          </Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('ItunesBrowser', () => ItunesBrowser);
