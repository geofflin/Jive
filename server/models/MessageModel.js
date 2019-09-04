const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.URI,
  ssl: true,
});

pool.connect((err, client, done) => {
  if (err) return console.error('Unsuccessfully connected to db', err);
  console.log('Successfully connected to db!');
});

module.exports = pool;
