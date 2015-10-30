'use strict';

// Bringing React into module
var React = require('react-native');

// Requiring React modules to be used
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image
} = React;

var Login = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('image!Octocat')} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'F5FCFF',
    flex: 1
  },

  text: {
    color: 'F0f0f0',
  }
});

module.exports = Login;
