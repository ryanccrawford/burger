require("dotenv").config();
const private = require("./config.js");
const mysql = require("mysql");
var con = {};
if ((process.env.PORT || 3000) != 3000) {
  con = {
    host: "gmgcjwawatv599gq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: private.mysqlPrivate.usernameRemote,
    password: private.mysqlPrivate.passwordRemote,
    database: "mfprp122v8lffehd"
  };
} else {
  con = {
    host: "localhost",
    port: 3306,
    user: private.mysqlPrivate.usernameLocal,
    password: private.mysqlPrivate.passwordLocal,
    database: "burgers_db"
  };
}
var connection = mysql.createConnection(con);
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
