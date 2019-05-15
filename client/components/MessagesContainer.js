import React, { Component } from 'react';
import MessagesDisplay from './MessagesDisplay.js';
import MessageForm from './MessageForm.js';

class MessagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.getMessages = this.getMessages.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }

  getMessages() {
    // Ping the server
    // fetch request to /messages route
    fetch('/messages')
      .then(res => res.json())
      .then(messages => this.setState({ messages }))
      .catch(err => console.error(err));
  }

  postMessage(fromUser, msg) {
    const message = {
      fromUser,
      msg
    }
    fetch('/messages', {
      method: 'POST', 
      body: JSON.stringify(message), 
      headers: { 'Content-Type': 'application/json' }
    })
      // .then(res => res.json())
      .then(() => this.getMessages())
      .catch(error => console.error('Error:', error));
  }

  componentDidMount() {
    this.getMessages();
    setTimeout(this.getMessages, 5000);
  }

  render() {
    return (
      <div>
        <MessagesDisplay messages={[...this.state.messages]} />
        <MessageForm postMessage={this.postMessage} />
      </div>
    );  
  }

}

export default MessagesContainer;