import WebSocket from 'ws';
import db from '../models/MessageModel';

interface Message {
  username: string,
  message: string,
}

export default {
  getMessages: (wss: WebSocket.Server) => {
    return db.query(`SELECT * FROM messages ORDER BY id DESC LIMIT 15`)
      .then(data => wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) client.send(JSON.stringify(data.rows))
      }))
      .catch(err => console.error('Error in getMessages controller', err));
  },

  addMessage: (payload: Message) => {
    const { username, message } = payload;
    const text = `INSERT INTO messages (username, message) VALUES ($1, $2) RETURNING *`;
    const values = [username, message];
    return db.query(text, values)
      .then(data => console.log('Successfully added message to db', data.rows[0]))
      .catch(err => console.error('Error in addMessage controller', err));
  },

  editMessage: () => {

  },

  deleteMessage: (payload: number) => {
    const text = `DELETE FROM messages WHERE id = $1 RETURNING *`;
    const values = [payload];
    return db.query(text, values)
      .then(data => console.log('Successfully deleted record', data.rows[0]))
      .catch(err => console.error('Error in deleteMessage controller', err));
  },
};
