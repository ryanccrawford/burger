const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Rcc083178",
    database: "`burgers_db"
})

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack)
        return
    }
    console.log("MySQL connected as id " + connection.threadId)
})

app.get("/", function (req, res) {

    var sql = `SELECT * FROM burgers`

    this.connection.query(sql, function (err, data) {
        if (err) {
            return res.status(500).end();
        }

        res.render("index", {
            burgers: data
        });
    });

});
app.get("/index.html", function (req, res) {
    res.redirect("/")
});

app.post("/api/addBurger", function (req, res) {

    var name = req.body.name

    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false)", [name], function (err, result) {
        if (err) {
            return res.status(500).end();
        }
        console.log({
             id: result.insertId
        });
        res.json({
            id: result.insertId
        });
    });
});

app.put("/api/eatBurger/:id", function (req, res) {

    var id = req.params.id

    connection.query("UPDATE burgers SET devoured=1 WHERE id = ?", [id], function (err, result) {
        if (err) {
            return res.status(500).end();
        } else if (result.changedRows === 0) {
            return res.status(404).end();
        }
        if (result.changedRows) {
            res.json({
                success: result.changedRows ? true : false
            });
        }
    });
})

app.listen(PORT, function () {
    console.log("Server listening on PORT: " + PORT);
});