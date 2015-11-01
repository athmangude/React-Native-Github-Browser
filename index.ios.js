/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

var Login = require('./Login');

var GithubBrowser = React.createClass({
  render: function() {
    if (this.state.isLoggedIn) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>You are logged In</Text>
        </View>
      );
    } else {
      return (
        <Login onLogin={this.onLogin} />
      );
    }

  },

  onLogin: function() {
    this.setState({
      isLoggedIn: true
    })
  },

  getInitialState: function () {
    return {
      isLoggedIn: false
    };
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  athman: {
    fontSize: 25,
    color: '#0000FF',
  }
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
