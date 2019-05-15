// const db = require('../database/elephantsql');
const { Pool } = require('pg');
const uri = 'postgres://kzbujefd:az33ZfTosSKCrfqnrM1dtGHDPIywoiQ2@isilo.db.elephantsql.com:5432/kzbujefd';
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

// Implement Database Logic Here to get messages from elephantsql
const messageController = {};

messageController.getMessages = (req, res, next) => {
  res.json({ test: 'its working!' });
}

messageController.postMessage = (req, res, next) => {
  const { fromUser, msg } = req.body;
  const insertQry = {
    text: `INSERT INTO messages ("fromUser", msg) VALUES ($1, $2) RETURNING *`,
    values: [
      fromUser,
      msg
    ]
  };
  // Insert our message into db
  pool
    .query(insertQry)
    .then(result => {
      console.log('Successfully inserted message to db', result.rows[0]);
      res.json(req.body);
    })
    .catch(err => res.status(400).send('Error inserting message to db', err));

  // Select all previous messages
  // pool
  //   .query('SELECT * FROM messages')
  //   .then(result => {
  //     console.log('Here are the records in the table now');
  //     for (let i = 0; i < result.rows.length; i++) { console.log(result.rows[i]); }
  //     res.json(req.body);
  //     // res.json(result.rows);
  //   })
  //   .catch(err => res.status(400).send('Error selecting message from db', err));
}
module.exports = messageController;