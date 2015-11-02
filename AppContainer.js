'use strict';

// Bringing React into module
var React = require('react-native');
var buffer = require('buffer');

// Requiring React modules to be used
var {
  View,
  Text,
  StyleSheet,
  Component
} = React;

class AppContainer extends Component {
  constructor(props){
    super(props);

    this.state = {

    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Tabs Coming Soon</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'F5FCFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});

module.exports = AppContainer;
