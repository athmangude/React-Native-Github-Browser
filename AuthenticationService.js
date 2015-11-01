var buffer = require('buffer');

class AuthenticationService {

  login(credentials, callback) {

    var b = new buffer.Buffer(credentials.username +
       ':' + credentials.password);
    var encodedBasicAuthToken = b.toString('base64');

    console.log(credentials.username, credentials.password);
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
      callback({loggedIn: true});
      console.log(results);
    }).catch((error) => {
      callback(error);
    });

  }

}

module.exports = new AuthenticationService();
