'use strict';

// Bringing React into module
var React = require('react-native');

// Requiring React modules to be used
var {
  AppRegistry,
  View,
  Text,
  StyleSheet
} = React;

var Login = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
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
