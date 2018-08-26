var mysql = require('mysql');

function con() {
    // return mysql.createConnection({
    //     host     : 'localhost',
    //     port: 3306,
    //     user     : 'root',
    //     password : 'root',
    //     database : 'burgers_db'
    // });
    if (process.env.JAWSDB_URL) {
        connection = mysql.createConnection(process.env.JAWSDB_URL);
    }
    else {
        connection = mysql.createConnection({
            host     : 'localhost',
            port: 3306,
            user     : 'root',
            password : 'root',
            database : 'burgers_db'
        })
    }
}
  

//mysql://uyw4nt5dhbt45u2d:t1m5ywzgxj14h4pj@l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/tv9n5hbcgjw0btae

module.exports = con;