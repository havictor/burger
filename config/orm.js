var db = require("./connection.js");

var con = db();

function BurgerOrm() {
    this.connection = con;
    this.tableName = "burgers";

    this.selectAll = function() {
        return new Promise((resolve, reject) => {
            
            var query = `SELECT * from burgers`;
            this.connection.query(query, (err, data, fields) => {

                var thisBurger;

                if (err) {
                    console.log(err);
                    return false; 
                }

                /*
                Object.keys(data).forEach(function(key) {
                    var row = data[key];    
                    thisBurger = {id: row.id, 
                        burger_name: row.burger_name, 
                        devoured: row.devoured};
                })

                resolve(thisBurger);
                */
                resolve(data);
            })
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

module.exports = {BurgerOrm: BurgerOrm};