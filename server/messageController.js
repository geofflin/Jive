const { Pool } = require('pg');

// Connect to db
const pool = new Pool({
  user: 'kzbujefd',
  host: 'isilo.db.elephantsql.com',
  database: 'kzbujefd',
  password: 'az33ZfTosSKCrfqnrM1dtGHDPIywoiQ2',
  port: 5432
});

pool.connect((err, client, done) => {
  if (err) return console.error('could not connect to postgres', err);
  console.log('Successfully connected to db!');
})

// Message Controller logic
const messageController = {};

messageController.getMessages = (req, res, next) => {
  pool
    .query(`SELECT * FROM messages ORDER BY _id DESC LIMIT 15`)
    .then(messages => {
      console.log('Successfully selected records from db!');
      res.json(messages.rows);
    })
    .catch(err => res.status(400).send('Error getting messages from db', err));
}

messageController.postMessage = (req, res, next) => {
  const { fromUser, msg } = req.body;
  // Insert our message into db
  pool
    .query({
      text: `INSERT INTO messages ("fromUser", msg) VALUES ($1, $2) RETURNING *`,
      values: [fromUser, msg]
    })
    .then(message => {
      console.log('Successfully inserted message to db', message.rows[0]);
      res.json(req.body); // send back a response of the posted message if successful
    })
    .catch(err => res.status(400).send('Error inserting message to db', err));
}

messageController.editMessage = (req, res, next) => {
  const { messageId } = req.params;
  const { newMsg } = req.body;
  console.log(`UPDATE messages SET msg='${newMsg}' WHERE _id=${messageId}`);
  pool
    .query(`UPDATE messages SET msg='${newMsg}' WHERE _id=${messageId}`)
    .then(message => {
      console.log('Successfully updated message in db', message.rows[0]);
      res.status(200).send();
    })
    .catch(err => res.status(400).send('Error updating message to db', err));
}

messageController.deleteMessage = (req, res, next) => {
  const { messageId } = req.params;
  pool
    .query(`DELETE FROM messages WHERE _id=${messageId}`)
    .then(() => console.log('Successful deletion!'))
    .then(() => res.status(200).send('Successfully deleted message'))
    .catch(err => res.status(400).send('Error deleting message to db', err));
}

module.exports = messageController;