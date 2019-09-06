import * as WebSocket from 'ws';
import db from '../models/MessageModel';
import { Message } from '../interfaces/interfaces';

export default {
  getMessages: (ws: WebSocket) => {
    db.query(`SELECT * FROM messages ORDER BY id DESC LIMIT 15`)
      .then(data => ws.send(JSON.stringify(data.rows)))
      .catch(err => console.error('Error in getMessages controller', err));
  },

  addMessage: (ws: WebSocket, payload: Message) => {
    const { username, message } = payload;
    const text = `INSERT INTO messages (username, message) VALUES ($1, $2) RETURNING *`;
    const values = [username, message];
    db.query(text, values)
      .then(data => ws.send(JSON.stringify(data.rows[0])))
      .catch(err => console.error('Error in addMessage controller', err));
  },

  editMessage: () => {

  },

  deleteMessage: (payload: number) => {
    const text = `DELETE FROM messages WHERE id = $1 RETURNING *`;
    const values = [payload];
    db.query(text, values)
      .then(data => console.log('Successfully deleted record', data.rows[0]))
      .catch(err => console.error('Error in deleteMessage controller', err));
  },
  
};
