var mysql = require('mysql');

function con() {
    return mysql.createConnection({
        host     : 'localhost',
        port: 3306,
        user     : 'root',
        password : 'root',
        database : 'burgers_db'
    });
}
  


module.exports = con;