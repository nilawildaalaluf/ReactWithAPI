import React, {Component} from 'react';
import {Text,View} from 'react-native';
//import { Content, Card, CardItem, Body, Left} from 'native-base';
export default class AppBodyData extends Component {

    render() {
        let articles = this.props.data.map(function (articleData, index) {
                return (
                  
                  <Text>
                      {articleData.title}
                  </Text>
                        
                )
            });

        return (
            <View>
                {articles}
            </View>

        );

    }
}
module.export = AppBodyData;