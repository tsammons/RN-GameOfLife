import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cell from './Cell';
import Cell_Color from './Cell_Color';

const BOARD_PADDING = 5;

export default class Grid extends React.Component {

  render() {

    return (
      <View style={ styles.board }>
        {this.props.grid.map((row, i) => 
            <View key={i} style={ styles.row }>
                {row.map((value, j) => 
                /*
                    <Cell 
                        key={`${i}-${j}`} 
                        value={value} 
                        onClick = {() => this.props.onClick(i, j)}
                    /> */
                    <Cell_Color 
                        key={`${i}-${j}`} 
                        value={value} 
                        onClick = {() => this.props.onClick(i, j)}
                    />
                )}
            </View>
        )}
      </View>
    );
  }
}

var styles = StyleSheet.create({
    board: {
      padding: BOARD_PADDING,
      //backgroundColor: '#6600ff', //'#bbaaaa',
      //borderRadius: 5,
    },
    row: {
      flexDirection: 'row',
    }
  });
