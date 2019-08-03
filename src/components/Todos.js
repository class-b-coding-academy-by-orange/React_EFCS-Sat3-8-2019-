import React, { Component } from 'react';

export default class Todos extends Component {
  state = {
    task: "Eat"
  };

  changeTasks = () => {
    console.log(this.props.color)
    this.setState({ task: 'Food' })
    // console.log(this.state.task)
  }
  render() {
    // console.log(this)
    // console.log('PROPS:', this.props);
    // console.log('HALA:', this.props.hala);
    const { type, color, hala } = this.props
    return (
      <div style={{ backgroundColor: color }}>
        <h1>Todos  => {this.state.task}</h1>
        <input type={type} />
        <button onClick={this.changeTasks}>Change Todos state</button>
        <button onClick={hala}>Change App state</button>
      </div>
    );
  }
}
