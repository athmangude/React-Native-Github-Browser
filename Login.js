'use strict';

// Bringing React into module
var React = require('react-native');
var buffer = require('buffer');

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

    var errorMessage = <View />

    if (!this.state.loggedIn && this.state.badCredentials) {
      errorMessage = <Text style={styles.error}>
        Invalid username and password combination
      </Text>
    } else if (!this.state.loggedIn && this.state.unknownError) {
      errorMessage = <Text style={styles.error}>
        Invalid username and password combination
      </Text>
    }

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('image!Octocat')} />
        <Text style={styles.heading}>Github Browser</Text>

        <TextInput
          style={styles.input}
          placeholder="Github Username"
          onChangeText={(text) => this.setState({username: text})}
        />

        <TextInput
          style={styles.input}
          placeholder="Github Username"
          secureTextEntry="true"
          onChangeText={(secureText) => this.setState({password: secureText})}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.onLoginPressed.bind(this)}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableHighlight>

        {errorMessage}

        <ActivityIndicatorIOS
          animating={this.state.showProgress}
          size="large"
          style={styles.loader}
        />

      </View>
    );
  }

  onLoginPressed(){
    // show activity indicator
    this.setState({showProgress: true});

    var b = new buffer.Buffer(this.state.username +
       ':' + this.state.password);
    var encodedBasicAuthToken = b.toString('base64');

    console.log(this.state.username, this.state.password);
    console.log(encodedBasicAuthToken);

    // make api request to Github repository search
    fetch('https://api.github.com/user', {
      headers: {
        'Authorization' : 'Basic ' + encodedBasicAuthToken
      }
    }).then((response) => {
      if(response.status >= 200 && response.status <= 300){
        return response;
      } else {
        throw {
          badCredentials: response.status == 401,
          unknownError: response.status != 401
        }
      }
    }).then((response) => {
      return response.json();
    }).then((results) => {
      this.setState({loggedIn: true});
      console.log(results);
    }).catch((error) => {
      this.setState(error)
    }).finally(() => {
      // stop displaying the progress
      this.setState({showProgress: false});
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
  },
  error: {
    color: 'red',
    paddingTop: 10
  }
});

module.exports = Login;
