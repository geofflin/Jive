import { Pool } from 'pg';
require('dotenv').config();

const db = new Pool({
  connectionString: process.env.URI,
  ssl: true,
});

db.connect((err: Error) => {
  if (err) return console.error('Unsuccessfully connected to db', err);
  console.log('Successfully connected to db!');
});

export default db;
