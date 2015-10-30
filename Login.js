'use strict';

// Bringing React into module
var React = require('react-native');

// Requiring React modules to be used
var {
  Text,
  StyleSheet
} = React;

var Login = React.createClass({
  render: function() {
    return (
      <Text style={styles.text}>Hello There</Text>
    );
  }
});

var styles = StyleSheet.create({
  text: {
    color: 'F0f0f0',
  }
});

module.exports = Login;
