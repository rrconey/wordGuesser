const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'info',
  port: 3000
});

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/', function (req, res) {
  console.log('route hit on get requst')
     connection.connect();

    connection.query('SELECT * FROM scoring', function (error, results, fields) {
      //if (error) throw error;
      console.log('REsulTSSSS', results)
      //res.send(results)
    });

    //connection.end();
});
// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000');
});