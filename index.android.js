/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './App';

export default class ReactWithAPI extends React.Component {
  
  render() {
    return (
        <App />
    );
  }
}



AppRegistry.registerComponent('ReactWithAPI', () => ReactWithAPI);
