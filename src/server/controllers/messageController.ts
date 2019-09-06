import pool from '../models/MessageModel';
import * as WebSocket from 'ws';

export default {
  getMessages: (ws: WebSocket) => {
    pool
      .query(`SELECT * FROM messages ORDER BY id DESC LIMIT 15`)
      .then(messages => {
        console.log('Successfully selected records from db!');
        ws.send(messages.rows);
      })
      .catch(err => console.error('Error in getMessages controller', err));
  },

  addMessage: () => {

  },

  editMessage: () => {

  },

  deleteMessage: () => {

  },
  
};
