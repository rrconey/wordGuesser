const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'info',
});

// Initialize the app
const app = express();



function handleDisconnect(conn) {
  conn.on('error', function(err) {
    if (!err.fatal) {
      return;
    }

    if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
      throw err;
    }

    console.log('Re-connecting lost connection: ' + err.stack);

    connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'info',
});
    handleDisconnect(connection);
    connection.connect();
  });
}

handleDisconnect(connection);






// https://expressjs.com/en/guide/routing.html
app.get('/', function (req, res) {
  console.log('route hit on get requst')
  res.set('Content-Type', 'text/plain');




    // connection = mysql.createConnection(connection.config);
    // handleDisconnect(connection);

// connection.connect();
    connection.query('SELECT * FROM scores', function (error, results, fields) {
      if (error) {res.send(error); return;} 
      console.log('REsulTSSSS', results)
      console.log('REsulTSSSS666', results[0])
      var query =  results[0];
      // info = results[0]
      res.send(query);
    });
      // handleDisconnect(connection);
    // res.send(info);
    //connection.end();
});
// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000');
});