import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    moives: []
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }
  render() {
    const { isLoading } = this.state; 
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}


export default App;

// jsx, props
// mounting, update, unmounting
// mounting
// constructor(), static getDrivedStateFromProps(), render(), componentDidMount()
// update
// static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidupdate()