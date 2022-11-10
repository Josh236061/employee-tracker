
// connect mySQL database 
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Greenlantern1990!",
  database: "employees"
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("Connected!");
});

module.exports = connection;