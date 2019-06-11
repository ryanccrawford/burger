const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")
// const Sequelize = require('sequelize');



var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'))
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
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
// const sequelize = new Sequelize('burgers_db', 'root', 'Rcc083178', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// const Burgers = sequelize.define('burgers', {
//     // attributes
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     },
//     burger_name: {
//         type: Sequelize.STRING,
//         allowNull:false
//     },
//     devoured: {
//         type: Sequelize.BOOLEAN,
//         allowNull: false,
//         defaultValue: 0
//     }

// }, {
//     // options
// });
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack)
        return
    }
    console.log("MySQL connected as id " + connection.threadId)
})

app.get("/", function (req, res) {

    var sql = `SELECT * FROM burgers`

    connection.query(sql, function (err, data) {
        if (err) {
            return res.status(500).end();
        }
         
        res.render("index", {
            burgers: data
        });
    });

});


app.post("/api/addburger", function (req, res) {

    var name = req.body.name

    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false)", [name], function (err, result) {
        if (err) {
            return res.status(500).end();
        }
        console.log({
             id: result.insertId
        });
    
        res.redirect("/")
        // res.json({
        //     id: result.insertId
        // });
    });
});

app.get("/api/eatburger/:id", function (req, res) {
    console.log(req)
    var id = parseInt(req.params.id)
  
    console.log(id)

    connection.query("UPDATE burgers SET devoured=1 WHERE id = ?", [id], function (err, result) {
        if (err) {
            throw err
        
            // return res.status(500).end();
        } 
        console.log(result)
    //    console.log(res.location())
      
     res.redirect("/")
            // res.json({
            //     success: result.changedRows ? true : false
            // });
        
    });
})


app.listen(PORT, function () {
    console.log("Server listening on PORT: " + PORT);
});