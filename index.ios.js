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
  View,
  ActivityIndicatorIOS
} = React;

var Login = require('./Login');
var AuthenticationService = require('./AuthenticationService');
var AppContainer = require('./AppContainer');

var GithubBrowser = React.createClass({

  componentDidMount: function() {
    AuthenticationService.getAuthenticationInfo((error, authenticationInfo) => {
      this.setState({
        checkingAuthentication: false,
        isLoggedIn: authenticationInfo != null
      });
    });
  },

  render: function() {

    if (this.state.checkingAuthentication) {
      return (
        <View style={styles.container}>
          <ActivityIndicatorIOS
            style={styles.loader}
            animating={true}
            size="large" />
        </View>
      );
    }

    if (this.state.isLoggedIn) {
      return (
        <AppContainer />
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
      isLoggedIn: false,
      checkingAuthentication: true
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
