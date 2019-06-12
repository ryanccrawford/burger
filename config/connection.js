const mysql = require("mysql")

    var con = {}
    if (PORT != 3000) {
        con = {
            //host: "us-cdbr-iron-east-02.cleardb.net",
            host: "gmgcjwawatv599gq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
            port: 3306,
           // user: "b813458a780ba2",
           // password: "6c076ffa",
             user: "yqr1358ag59b86t2",
                 password: "o086x03u31yvacsx",
           // database: "heroku_efc63d0c2f5b0a1",
            database: "mfprp122v8lffehd"
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