import React, { Component } from 'react';
import Message from './Message.js';
import MessageForm from './MessageForm.js';

class MessagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ['hi', 'hello', 'sup']
    }
    this.getMessages = this.getMessages.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }

  getMessages() {
    // Ping the server
    // fetch()
  }

  postMessage(msg) {
    const { messages } = this.state;
    this.setState({ messages: messages.concat(msg) });
  }

  render() {
    const messages = this.state.messages.map(msg => <Message msg={msg} />);
    return (
      <div>
        {messages}
        <MessageForm postMessage={this.postMessage} />
      </div>
    );  
  }

}

export default MessagesContainer;