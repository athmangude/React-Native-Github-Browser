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
  TextInput,
  TouchableHighlight
} = React;

var Login = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('image!Octocat')} />
        <Text style={styles.heading}>Github Browser</Text>
        <TextInput style={styles.input} placeholder="Github Username" />
        <TextInput style={styles.input} placeholder="Github Username" secureTextEntry="true" />
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'F5FCFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  logo: {
    width: 122,
    height: 111,
  },
  heading: {
    fontSize: 30,
    marginTop: 10,
    paddingBottom: 20
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '48bbec',
    marginTop: 10,
    padding: 4,
    fontSize: 18,
  },
  button: {
    height: 50,
    backgroundColor: '48bbec',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 22,
    color: 'FFF'
  }
});

module.exports = Login;
