import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Cell extends React.Component {

  render() {
    let title = this.props.value.toString();
    return (
        
      <View>
        <Button 
            color= 'white'//'#ff5c5c'
            title={title} 
            onPress={() => this.props.onClick() }
        />
      </View>
      
    );
  }
}
