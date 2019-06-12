var mysql = require("mysql")

    var con = {}
    if (process.env.PORT) {
        con = {
            host: "us-cdbr-iron-east-02.cleardb.net",
            port: 3306,
            user: "b813458a780ba2",
            password: "6c076ffa",
            database: "heroku_efc63d0c2f5b0a1"
        }
    } else {
        con = {
            host: "localhost",
            port: 3306,
            user: "root",
            password: "Rcc083178",
            database: "burgers_db"
        }
    }
    
var connection = mysql.createConnection(con)
    
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

 module.exports = connection