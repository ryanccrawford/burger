const express = require("express");
const burger = require("../models/burger")
const exphbs = require("express-handlebars");

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

var router = app.Router()



    router.get("/", function (req, res) {


    });
    router.get("/index.html", function (req, res) {


    });

    router.post("/api/getBurgers", function (req, res) {


    });

    router.put("/api/eatBurger/:id", function (req, res) {


    });

    router.listen(PORT, function () {
        console.log("Server listening on PORT: " + PORT);
    });

 module.exports = router