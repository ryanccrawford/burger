const orm = require("../config/orm.js")

var burger = {
    getBurgers: function (cb) {
        orm.read("*", "burgers", function (res) {
            cb(res)
        })
    },
    createBurger: function (burgerName, cb) {
        orm.create("burgers", "burger_name", burgerName, function (res) {
            cb(res)
        })
    },
    devouerBurger: function (id, cb) {
        orm.update("burgers", "devoured", true, "id", id, function (res) {
            cb(res)
        })
    }
}
module.exports = burger