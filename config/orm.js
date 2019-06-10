var connection = require("connection")

var orm = function ORM() {
    this.connection = connection
    this.selectAll = function (res) {

        var sql = `SELECT * FROM burger_name`

        this.connection.query(sql, function (err, data) {
            if (err) {
                return res.status(500).end();
            }

            res.render("index", {
                burgers: data
            });
        });



    }
    this.insertOne = function (insertData, res) {
        this.connection.query("INSERT INTO plans (plan) VALUES (?)", [insertData], function (err, result) {
            if (err) {
                return res.status(500).end();
            }

            // Send back the ID of the new plan
            res.json({
                id: result.insertId
            });
            console.log({
                id: result.insertId
            });
        });



    }
    this.updateOne = function (id, updateData, res) {
        this.connection.query("UPDATE plans SET plan = ? WHERE id = ?", [updateData, id], function (err, result) {
            if (err) {
                // If an error occurred, send a generic server failure
                return res.status(500).end();
            } else if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        });
    }
}

module.exports.orm = ORM