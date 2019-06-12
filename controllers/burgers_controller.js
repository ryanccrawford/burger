const express = require("express")
const burger = require("../models/burger.js")
var router = express.Router()


router.get("/", function (req, res) {
    burger.getBurgers(function (data) {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
})

router.post("/api/addburger", function (req, res) {
    var burgerName = req.body.burger_name
    burger.createBurger(burgerName, function (result) {
        res.json({
            id: result.insertId
        })
    })
})

router.put("/api/eatburger/:id", function (req, res) {
    var id = req.params.id
    burger.devouerBurger(id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

module.exports = router