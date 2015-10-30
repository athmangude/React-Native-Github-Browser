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
        <Text style={styles.heading}>Github Browser</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'F5FCFF',
    flex: 1,
    paddingTop: 40,
    alignItems: 'center'
  },
  logo: {
    width: 66,
    height: 55
  },
  heading: {
    fontSize: 30,
    marginTop: 10
  }
});

module.exports = Login;
