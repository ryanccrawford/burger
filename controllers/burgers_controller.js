const express = require("express");
const burger = require("../models/burger")
const exphbs = require("express-handlebars");

module.exports = function () {
    
    var app = express();
    var PORT = process.env.PORT || 8080;

    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());


    //load handlebars view engine
    app.engine("handlebars", exphbs({
        defaultLayout: "main"
    }));
    app.set("view engine", "handlebars");


    app.get("/", function (req, res) {


    });
    app.get("/index.html", function (req, res) {


    });

    app.post("/api/getBurgers", function (req, res) {


    });

    app.put("/api/eatBurger/:id", function (req, res) {


    });

    app.listen(PORT, function () {
        console.log("Server listening on PORT: " + PORT);
    });

}