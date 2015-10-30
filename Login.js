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
  TouchableHighlight,
  Component,
  ActivityIndicatorIOS
} = React;

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      showProgress: false
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('image!Octocat')} />
        <Text style={styles.heading}>Github Browser</Text>

        <TextInput
          style={styles.input}
          placeholder="Github Username"
          onChangeText={(username) => this.setState({username: username})}
        />

        <TextInput
          style={styles.input}
          placeholder="Github Username"
          secureTextEntry="true"
          onChangeText={(password) => this.setState({password: password})}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.onLoginPressed.bind(this)}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableHighlight>

        <ActivityIndicatorIOS
          animating={this.state.showProgress}
          size="large"
          style={styles.loader}
        />

      </View>
    );
  }

  onLoginPressed(){
    this.setState({showProgress: true});

    // make api request to Github repository search
    fetch('https://api.github.com/search/repositories?q=react').then((response) => {
      return response.json();
    }).then((results) => {
      console.log(results);
      this.setState({showProgress: false})
    });
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
  },

  loader: {
    marginTop: 20
  }
});

module.exports = Login;
