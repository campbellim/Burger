var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  port: 3306,
  user:'root',
  password: 'Niana3132!2018',
  database:'burgers_db'
}); 
 
module.exports = connection;
