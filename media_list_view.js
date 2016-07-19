import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  AlertIOS
} from 'react-native';

// Styles
import styles from './styles';

// Itunes Search API
const API_URL = 'https://itunes.apple.com/search';

var LOADING = {};

var resultsCache = {
  dataForQuery: {}
};

class SearchBar extends Component {
  _urlForQuery(query: string) {
    if (query) {
      return API_URL + '?media=movies&term=' + encodeURIComponent(query);
    } else {
      return API_URL + '?media=movies&term=mission+impossible';
    }
  }

  searchMedia(query: string) {
    var cachedResultsForQuery = resultsCache.dataForQuery[query];

    if (cachedResultsForQuery) {
      if (!LOADING) {
        AlertIOS.alert('Number of results', cachedResultsForQuery.length + 'cached results');
      }
    } else {
      LOADING[query] = true;
      resultsCache.cachedResultsForQuery[query] = null;

      fetch(this._urlForQuery(query))
        .then((response) => response.json)
        .catch((err) => {
          LOADING[query] = false;
          resultsCache.dataForQuery[query] = undefined;
        })
        .then((responseData) => {
          LOADING[query] = false;
          resultsCache.dataForQuery[query] = responseData.results;

          AlertIOS.alert('Number of results', responseData.resultCount + 'results');
        });
    }
  }

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