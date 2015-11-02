'use strict';

// Bringing React into module
var React = require('react-native');
var buffer = require('buffer');

// Requiring React modules to be used
var {
  View,
  Text,
  StyleSheet,
  Component,
  TabBarIOS
} = React;

class AppContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedTab: 'feed'
    }

  }

  render() {
    return (
      <TabBarIOS style={styles.container}>
        <TabBarIOS.Item
          title = "Feed"
          selected = {this.state.selectedTab == 'feed'}
          icon = {require('image!inbox')}
          onPress = {() => this.setState({selectedTab: 'feed'})} >
          <Text style={styles.welcome}>Feed</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title = "Search"
          selected = {this.state.selectedTab == 'search'}
          icon = {require('image!search')}
          onPress = {() => this.setState({selectedTab: 'search'})} >
          <Text style={styles.welcome}>Search</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    paddingTop: 100
  }
});

module.exports = AppContainer;
