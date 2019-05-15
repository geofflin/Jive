import React, { Component } from 'react';
import Message from './Message.js';
import MessageForm from './MessageForm.js';

class MessagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{ fromUser: 'Geoff', msg: 'Hello!' }]
    }
    this.getMessages = this.getMessages.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }

  getMessages() {
    // Ping the server
    // fetch request to /messages route
    fetch('/messages')
      .then(res => res.json())
      .then(myJson => console.log(JSON.stringify(myJson)))
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
      .then(res => res.json())
      .then(message => this.setState({ messages: this.state.messages.concat(message) }))
      .catch(error => console.error('Error:', error));
  }

  render() {
    const messages = this.state.messages.map((msgObj, i) => <Message msgObj={msgObj} key={i} />);
    return (
      <div>
        {messages}
        <MessageForm getMessages={this.getMessages} postMessage={this.postMessage} />
      </div>
    );  
  }

}

export default MessagesContainer;