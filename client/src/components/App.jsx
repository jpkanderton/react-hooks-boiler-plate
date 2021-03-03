import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stateItem: 'I am from the state'};
  }
  render() {
    return (
      <div>
        <div>this your first react component</div>
        <div>{this.state.stateItem}</div>
      </div>
    )
  }
}

export default App;