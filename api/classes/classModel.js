
const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Trandinhphuoc2k",
    database: "Classroom"
});
exports.list =  function(req,res) {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM class ORDER BY id desc";
        con.query(sql, function (err, results) {
            if (err) {
                reject(err);
            }
            resolve(results);
        });

    });
}
exports.create = function(id,name, callback) {
    return new Promise(() => {
        var sql = "INSERT INTO `class` (`id`, `name`) VALUES ('" + id + "', '" + name + "');";
        con.query(sql, function (err) {
            if ( err) throw err;
            callback();            
        });

    });
}