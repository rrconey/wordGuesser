const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
var serverInfo = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'info',
}

const connection = mysql.createConnection(serverInfo);

// Initialize the app
const app = express();

function handleDisconnect(conn) {
  conn.on('error', function(err) {
    if (!err.fatal) { return;}

    if (err.code !== 'PROTOCOL_CONNECTION_LOST') {  throw err;}
    // console.log('Re-connecting lost connection: ' + err.stack);
    connection = mysql.createConnection(serverInfo);
    handleDisconnect(connection);
    connection.connect();
  });
}

handleDisconnect(connection);

// LOADS INTIAL SCORES ON GET REQUEST;
app.get('/', function (req, res) {
  console.log('route hit on get requst')
  res.set('Content-Type', 'text/plain');
    connection.query('SELECT * FROM scores', function (error, results, fields) {
      if (error) {res.send(error); return;} 

      var query =  results[0];
      res.send(query);
    });
});

//WIN ENDPOINT
app.post('/win', function (req, res) {
  res.set('Content-Type', 'text/plain');
    connection.query('update scores set wins = wins+1;', function (error, results, fields) {
      if (error) {res.send(error); return;} 
      console.log('game WON!!!!')
    });
})

//LOSS ENDPOINT
app.post('/loss', function (req, res) {
  res.set('Content-Type', 'text/plain');
    connection.query('update scores set loss = loss+1;', function (error, results, fields) {
      if (error) {res.send(error); return;} 
      console.log('game LOST!!!!')
    });
})


// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000');
});