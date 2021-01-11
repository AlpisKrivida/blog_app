require('dotenv').config()
const mysql = require('mysql');

let connection = mysql.createConnection({
        // host:process.env.MYSQL_HOST,
        // user:process.env.MYSQL_USER,
        // password:'',
        // database:process.env.MYSQL_DB,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'react_blog'
});

connection.connect(err => {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

let config = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'react_blog',
        multipleStatements: true
    }
}


// let config = {
//     client: 'mysql',
//     connection: {
//         host:process.env.MYSQL_Host,
//         user:process.env.MYSQL_USER,
//         password:process.env.MYSQL_PASS,
//         database: process.env.MYSQL_DB,
//         multipleStatements: true
//     }
// }

module.exports = require('knex')(config)