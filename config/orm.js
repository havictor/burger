var db = require("./connection.js");

var con = db();

function BurgerOrm() {
    this.connection = con;
    this.tableName = "burgers";

    this.selectAll = function() {

        var query = `SELECT * from burgers`; //change this

        this.connection.query(query, (err, data) => {
            if (err) {
                console.log(err);
                return false;
            }
            return true;
        })
        //used toshow all old burgers
    }

    this.insertOne = function(bName) {

        var query = `INSERT INTO burgers (burger_name) VALUES ("${bName}")`; //change this

        this.connection.query(query, (err, data) => {
            if (err) {
                console.log(err);
                return false;
            }
            return true;
        })

    }

    this.updateOne = function(tableId) {

        var query = `UPDATE burgers SET DEVOURED = TRUE WHERE ID = "${tableId}"`; //change this

        this.connection.query(query, (err, data) => {
            if (err) {
                console.log(err);
                return false;
            }
            return true;
        })


    }

}

// var orm = new BurgerOrm(connect, "burgers");
//     var sql = "INSERT INTO BURGERS (burger_name) VALUES (?)"

    

//     function insertOne() {

//         con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 burger ordered");
//         });
//     };



module.exports = {BurgerOrm: BurgerOrm};