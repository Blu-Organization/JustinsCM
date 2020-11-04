const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'mvp',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (err, rows) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log('The solution is: ', rows[0].solution);
});

module.exports = connection;