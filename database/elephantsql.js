// const pg = require('pg');
const { Client } = require('pg');
const uri = 'postgres://kzbujefd:az33ZfTosSKCrfqnrM1dtGHDPIywoiQ2@isilo.db.elephantsql.com:5432/kzbujefd';

const client = new Client(uri);

// username: kzbujefd
// password: az33ZfTosSKCrfqnrM1dtGHDPIywoiQ2
// Connect to ElephantSQL database
client.connect(err => {
  if (err) return console.error('could not connect to postgres', err);
  console.log('Successfully connected to db!');
  

  const dropQry = `DROP TABLE IF EXISTS messages`;  
  const createQry = (
    `CREATE TABLE messages
    (
      _id SERIAL PRIMARY KEY NOT NULL,
      message VARCHAR(250) NOT NULL,
      from_user_id VARCHAR(50) NOT NULL
    )`
    
    // to_user_id VARCHAR(15) NOT NULL,
  );
  const insertQry = {
    text: `INSERT INTO messages (message, from_user_id) VALUES ($1, $2) RETURNING *`,
    values: [
      'Hey world',
      'Geoff'
    ]
  };

  const selectQry = `SELECT * FROM messages`;

  // client
  //   .query(dropQry)
  //   .then(result => console.log('Successfully dropped messages table'))
  //   .catch(err => {
  //     console.log('Unsuccessfully dropped messages table', err);
  //     client.end();
  //   });

  // client
  //   .query(createQry)
  //   .then(result => console.log('Successfully created messages table'))
  //   .catch(err => {
  //     console.error('Unsuccessfully created messages table', err);
  //     client.end();
  //   });

  client
    .query(insertQry)
    .then(result => {
      console.log('Successfully inserted into message table', result.rows[0]);
    })
    .catch(err => {
      console.error('Unsuccessfully inserted into messages table', err);
      client.end();
    });

  client
    .query(selectQry)
    .then(result => {
      console.log('Here are the records in the table now');
      for (let i = 0; i < result.rows.length; i++) {
        console.log(result.rows[i]);
      }
      client.end();
    })
    .catch(err => {
      console.error('Error selecting', err);
      client.end();
    })
});


// Another way of storing the database:
// let db;
// pg.connect(uri, (err, database) => {
//   if (err) throw new Error(err);
//   db = database;
// })

  // client
  //   .query('SELECT NOW() AS "theTime"')
  //   .then(result => {
  //     console.log(result.rows[0].theTime);
  //     client.end();
  //   })
  //   .catch(err => {
  //     console.error('error running query', err);
  //     client.end();
  //   });