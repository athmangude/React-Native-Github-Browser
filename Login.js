'use strict';

// Bringing React into module
var React = require('react-native');

// Requiring React modules to be used
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
} = React;

var Login = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('image!Octocat')} />
        <Text style={styles.heading}>Github Browser</Text>
        <TextInput style={styles.input} placeholder="Github Username" />
        <TextInput style={styles.input} placeholder="Github Username" secureTextEntry="true" />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'F5FCFF',
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    padding: 10
  },
  logo: {
    width: 66,
    height: 55
  },
  heading: {
    fontSize: 30,
    marginTop: 10
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '48bbec',
    marginTop: 10,
    padding: 4,
    fontSize: 18,
  }
});

module.exports = Login;
