const connection = require("../config/connection.js")
var orm = {
    read: function (col, table, callback) {

        var sql = "SELECT ?? FROM ??"

        connection.query(sql, [col, table], function (err, data) {
            if (err) {
                throw err
            }
            callback(data)
        })
    },
    create: function (table, cols, colvalues, callback) {
        var sql = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(sql, [table, cols, colvalues], function (err, result) {
            if (err) {
                throw err
            }
            callback(result)
        })
    },
    update: function (table, col, value, col2, idvalue, callback) {
        var sql = "UPDATE ?? SET ??=? WHERE ??=?"
        connection.query(sql, [table, col, value, col2, idvalue], function (err, result) {
            if (err) {
                throw err
            }
            callback(result)
        })
    }
}

module.exports = orm