import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import MessagesDisplay from './MessagesDisplay.js.js';
import MessageForm from './MessageForm.js.js';

class MessagesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.getMessages = this.getMessages.bind(this);
    this.postMessage = this.postMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  getMessages() {
    fetch('/messages')
      .then(res => res.json())
      .then(messages => this.setState({ messages }))
      .catch(err => console.error(err));
    setTimeout(this.getMessages, 1000);
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
      .then(() => console.log('Successfully posted message')) 
      .catch(error => console.error('Error:', error));
  }

  // Changes the message to HARD-CODED VALUE
  editMessage(messageId) {
    const newMessage = { newMsg: 'Hard-Coded' };
    fetch(`/messages/${messageId}`, {
      method: 'PATCH',
      body: JSON.stringify(newMessage), 
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => console.log('Successfully edited message'))
      .catch(error => console.error('Error:', error));
  }

  deleteMessage(messageId) {
    fetch(`/messages/${messageId}`, {
      method: 'DELETE'
      // body: JSON.stringify(messageId), 
      // headers: { 'Content-Type': 'text/plain' }
    })
      .then(() => console.log('Successfully deleted message'))
      .catch(error => console.error('Error:', error));
  }

  componentDidMount() {
    this.getMessages();
    // const socket = socketIOClient('http://localhost:3000/');
    // socket.on('news', function (data) {
    //   console.log(data);
    //   socket.emit('test', { my: 'data' });
    // });
  }

  render() {
    return (
      <div>
        <MessagesDisplay 
          messages={this.state.messages} 
          deleteMessage={this.deleteMessage}
          editMessage={this.editMessage}
        />
        <MessageForm postMessage={this.postMessage} />
      </div>
    );  
  }

}

export default MessagesContainer;