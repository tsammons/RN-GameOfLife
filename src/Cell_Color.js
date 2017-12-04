import React from 'react';
import { Animated, StyleSheet, Text, View, Button } from 'react-native';

export default class Cell_Color extends React.Component {

  componentWillMount() {
    this._aliveColor = new Animated.Value(this.props.value ? 1 : 0);
  }
    
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }

  render() {
    const opacity = this.props.value;
    const backgroundColor = '#ff5c5c';

    return (
        <View style={[styles.cell, {backgroundColor:'#6600ff'}]}>
            <Animated.View style={[styles.cell, { backgroundColor, opacity }]}>
                <Button title="" onPress={() => this.props.onClick()}/>
            </Animated.View>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  cell: {
    width: 30,
    height: 30,
    margin: 1,
  }
});
