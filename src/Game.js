import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Grid from './Grid';

export default class Game extends React.Component {

  // initialize state with grid
  constructor(props) {
    super(props);

    let gridHeight = 11;
    let gridWidth = 11;

    this.state = {
      grid: this.initializeGrid(gridHeight, gridWidth),
      gameInterval: 0,
      gridHeight: gridHeight,
      gridWidth: gridWidth
    };
  }

  initializeGrid(height, width) {
    let grid = [];
    for (var i = 0; i < height; i++) {
      let row = [];
      for (var j = 0; j < width; j++) {
        row.push((Math.random()>0.7) ? 1 : 0);
      }
      grid.push(row);
    }
    return grid;
  }

  handleClick(i, j) {
    const current = this.state.grid.slice();
    current[i][j] = current[i][j] ? 0 : 1;
    this.setState({
      grid: current,
    });
  }

  reset() {
    this.setState({
      grid: this.initializeGrid(this.state.gridHeight, this.state.gridWidth),
    });
  }

  play() {
    if (this.state.gameInterval == 0) {
      this.setState({
        gameInterval: setInterval(() => this.tick(), 100),
      });
    }
    else
      return;
  }

  moveForward() {
    this.tick();
  }

  stop() {
    clearInterval(this.state.gameInterval);
    this.setState({
      gameInterval: 0,
    });
  }

  tick() {
    let tempGrid = [];
    const current = this.state.grid.slice();
    for (var i = 0; i < this.state.gridHeight; i++) {
      let row = [];
      for (var j = 0; j < this.state.gridWidth; j++) {
        let count = this.countNeighbors(i, j, current);
        if (count < 2 || count > 3)
          row.push(0);
        if (count === 3)
          row.push(1);
        if (count === 2)
          row.push(current[i][j]);
      }
      tempGrid.push(row);
    }

    this.setState({
      grid: tempGrid,
    })
  }

  countNeighbors(row, col, current) {
    let neighborCount = 0;
    
        for (var i = -1; i < 2; i++) {
          for (var j = -1; j < 2; j++) {
            if (row + i >= 0 && row + i < this.state.gridHeight) {
              if (col + j >= 0 && col + j < this.state.gridWidth) {
                if (current[row + i][col + j] === 1) {
                  if (!(i === 0 && j === 0))
                    neighborCount++;
                }
              }
            }
          }
        }
        return neighborCount;
  }

  render() {

    const current = this.state.grid.slice();

    return (
      <View>
        <Grid 
          grid = {current}
          onClick = {(i, j) => this.handleClick(i, j)}
        />
        <Button title="Reset" onPress={() => this.reset()} />
        <Button title="Play" onPress={() => this.play()} />
        <Button title="Stop" onPress={() => this.stop()} />
        <Button title="Forward One" onPress={() => this.moveForward()} />
      </View>
    );
  }
}
