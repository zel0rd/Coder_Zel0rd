import React from 'react';
import PropTypes from 'prop-types'
import Potato from './Potato'

class App extends React.Component {
  state = {
    count: 0
  }
  add = () => {
    // this.setState({ count : this.state.count + 1})
    this.setState(current => ({ count: current.count + 1}))
  };
  sub = () => {
    // this.setState({ count : this.state.count - 1})
    this.setState(current => ({ count: current.count - 1}))
  };
  render () {
     return (
      <div>
          <h1>The number is { this.state.count } </h1> 
          <button onClick={this.add}>Add</button>
          <button onClick={this.sub}>Sub</button>
      </div>
     )}
}


export default App;

// jsx, props
// mounting, update, unmounting
// mounting
// constructor(), static getDrivedStateFromProps(), render(), componentDidMount()
// update
// static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidupdate()