var mysql = require('mysql');

function con() {
    return mysql.createConnection({
        host     : 'localhost',
        port: 3006,
        user     : 'root',
        password : 'root',
        database : 'burgers'
    });
}
  
// con.connect(function(err) {
//     if (err) {
//         console.log("Error Connecting:"+err)
//     }
// });

module.exports = con;