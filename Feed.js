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
