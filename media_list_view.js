import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  AlertIOS
} from 'react-native';

import styles from './styles';

class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search for media on iTunes..."
          returnKeyType="search"
          enablesReturnKeyAutomatically={true}
          style={styles.searchBarInput}
          onEndEditing={this.props.onSearch}
        />
      </View>
    );
  }
}

export default class MediaListView extends Component {
  render() {
    return (
      <View style={styles.content}>
        <SearchBar
          onSearch={(event) => {
            var searchString = event.nativeEvent.text;
            AlertIOS.alert("Searching for...", searchString);
          }} 
        />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sint ipsa? Soluta culpa ea velit recusandae quos dolores iste assumenda ipsum cupiditate sunt neque ducimus, nisi fugit cumque dignissimos nam.
        </Text>
      </View>
    );
  }
}