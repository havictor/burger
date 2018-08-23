var db = require("./connection.js");

var con = db();


function BurgerOrm() {
    this.connection = con;
    this.tableName = "burgers";

    this.selectAll = function() {
        return new Promise((resolve, reject) => {
        //callback();
            
            var query = `SELECT * from burgers`;
            this.connection.query(query, (err, data, fields) => {

                var thisBurger;

                if (err) {
                    console.log(err);
                    return false; 
                }

                //return(data);

                Object.keys(data).forEach(function(key) {
                    var row = data[key];
                    thisBurger = {id: row.id, burger_name: row.burger_name, devoured: row.devoured};
                    
                })

                console.log(thisBurger)

                resolve(thisBurger);
                //console.log(data);

                //res.JSON(thisBurger);
            })
        // callback();
        })
    }

    this.insertOne = function(bName) {

        var query = `INSERT INTO burgers (burger_name) VALUES ("${bName}")`;

        this.connection.query(query, (err, data) => {
            if (err) {
                console.log(err);
                return false;
            }
            return true;
        })

    }

    this.updateOne = function(tableId) {

        var query = `UPDATE burgers SET DEVOURED = TRUE WHERE ID = "${tableId}"`;

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