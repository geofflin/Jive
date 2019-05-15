import React, { Component } from 'react';
import MessagesContainer from './MessagesContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>REACT APP COMPONENT</h2>
        <MessagesContainer id='msgContainer' />
      </div>
    );
  }

}

export default App;