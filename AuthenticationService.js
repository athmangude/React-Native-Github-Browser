var buffer = require('buffer');
var AsyncStorage = require('react-native').AsyncStorage;
var _ = require('lodash');

const authTokenKey = 'authToken';
const userKey = 'user';

class AuthenticationService {

  getAuthenticationInfo(callback) {
    AsyncStorage.multiGet([authTokenKey, userKey], (error, result) => {
      if (error) {
        return callback(error);
      } else {
        if (!result) {
          return callback();
        }

        var zippedObject = _.zipObject(result);

        if(!zippedObject[authTokenKey]) {
          return callback();
        }

        var authenticationInfo = {
          header: {
            Authorization: 'Basic' + zippedObject[authTokenKey]
          },
          user: JSON.parse(zippedObject[userKey])
        }

        return callback(null, authenticationInfo);

      }
    });
  }

  login(credentials, callback) {

    var b = new buffer.Buffer(credentials.username +
       ':' + credentials.password);
    var encodedBasicAuthToken = b.toString('base64');

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
      AsyncStorage.multiSet([
        [authTokenKey, encodedBasicAuthToken],
        [userKey, JSON.stringify(results)]
      ], (error) => {
        if (error) {
          throw error;
        }
        return callback({loggedIn: true});
      });
    }).catch((error) => {
      callback(error);
    });

  }

}

module.exports = new AuthenticationService();
