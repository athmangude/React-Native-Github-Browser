'use strict';

// Bringing React into module
var React = require('react-native');

// Requiring React modules to be used
var {
  View,
  Text,
  Component,
  ListView
} = React;

// var AuthenticationService = require('./AuthenticationService');

class Feed extends Component {
  constructor(props){
    super(props);

    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(['A', 'B', 'C'])
    };
  }

  componentDidMount() {
    this.fetchFeed();
  }

  fetchFeed() {
    require('./AuthenticationService').getAuthenticationInfo((error, authenticationInfo) => {

      var url = 'https://api.github.com/users/'+authenticationInfo.user.login+'/received_events';

      fetch(url, {
        headers: authenticationInfo.header
      }).then((response) => {
        console.log(response);
        response.json
      }).then((responseData) => {
        console.log(responseData);
        var feedItems = responseData.filter((ev) => ev.type == 'PushEvent');
        console.log(feedItems);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(feedItems)
        });
      });
    });
  }

  renderRow(rowData) {
    return <Text
        style={
          {
            color: '#333',
            backgroundColor: '#FFF',
            alignSelf: 'center'
          }
        }>
        {rowData}
      </Text>
  }

  render() {
    return (
      <View style={
        {
          flex: 1,
          justifyContent: 'flex-start'
        }
      }>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
}

module.exports = Feed;
