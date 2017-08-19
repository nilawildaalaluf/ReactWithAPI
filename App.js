import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Image, Dimensions } from 'react-native';
const {width} = Dimensions.get('window')


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://simple-lumen-api.herokuapp.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <View>
          <Image source={require('./image/fb.png')} style={{paddingTop: 20, width:width, height:100}}/>
        </View>
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
          <View style={{padding: 10}}> 
            <View style={{padding: 10, alignItems:'center'}}>
            <Text>Title</Text>
            </View>
            <Text>{rowData.title}</Text>
            <View style={{padding: 10, alignItems:'center'}}>
            <Text>Description </Text>
            </View>
            <Text>{rowData.body}</Text>
          </View>}
        />

      </View>
      </View>
    );
  }
}