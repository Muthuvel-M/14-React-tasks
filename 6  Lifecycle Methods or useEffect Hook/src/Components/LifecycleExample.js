// src/LifecycleExample.js
import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor: Component is being constructed.');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has mounted.');
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component has updated.');
    if (prevState.count !== this.state.count) {
      console.log(`Count updated to: ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component will unmount.');
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default LifecycleExample;
