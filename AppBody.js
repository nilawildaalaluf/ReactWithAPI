
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppBodyData from './BodyList';

export default class AppBody extends Component {
  constructor(){
    super()
    this.state ={
      data:[]
    }
  }
  getData(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson.feed.entry});
      })
      .catch((error) => {
        console.error(error);
      });
  


  }
  componentDidMount(){
    this.getData();
   }
  
  render() {
    return (
      <AppBodyData data= {this.state.data}/>
    );
  }
}
//module.export = AppBody;



