import React, { Component } from 'react';
import Message from './Message.js';
import MessageForm from './MessageForm.js';

class MessagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ['hi', 'hello', 'sup'] // need to replace string elements with msgObjects
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

  postMessage(from_user, msg) {
    // const { messages } = this.state;
    // this.setState({ messages: messages.concat(msg) });
    const message = {
      from_user,
      msg
    }
    console.log(message);
    fetch('/messages', {
      method: 'POST', 
      body: JSON.stringify(message), 
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(res => console.log('Success:', JSON.stringify(res)))
      .catch(error => console.error('Error:', error));
  }

  render() {
    const messages = this.state.messages.map((msg, i) => <Message msg={msg} key={i} />);
    return (
      <div>
        {messages}
        <MessageForm getMessages={this.getMessages} postMessage={this.postMessage} />
      </div>
    );  
  }

}

export default MessagesContainer;