// import React, React.Component from 'react';
import React, { Component } from 'react';
import Todos from './components/Todos';

export default class App extends Component {
  state = {
    data: 'Test', // todos changed you
    ages: [24, 33, 45]
  };
  changeData = () => {
    this.setState({ data: 'Alice Zaheer' });
  }
  render() {
    let y = 8
    console.log("RENDER 2", y)
    const { data, ages } = this.state
    console.log("RENDER 2", this.state.data)
    return (
      <React.Fragment>
        <h1>App Component => {data}</h1>
        <button onClick={this.changeData}>Change Data</button>
        <Todos type="password" color="red" hala={this.changeData} />
        <Todos type="text" color="yellow" />
      </React.Fragment >
    );
  }
}
/*
notes:
 when create a fucntion if it is ES5 we need to use
 bind or create this fucntion in ES6 as a arrow function
  // problems:
  // how to change from child: send a function from parent to child as props, the function changes the data
  // to what you want to change
  // changeFromChild = () => {
  //   console.log('change from child have been called');
  //   this.setState({ data: 'Changed from child' })
  // }

  */