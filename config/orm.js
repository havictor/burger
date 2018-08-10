var con = require("./connection.js");
var connection = con()

connection.connect((err) => {
    if (err) {
        console.log("Error Connecting:"+err)
    }
});

var orm = new BurgerOrm(connect, "burgers");
    var sql = "INSERT INTO BURGERS (burger_name) VALUES (?)"

    
    function selectAll() {
        //used toshow all old burgers
    };

    function insertOne() {

        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 burger ordered");
        });
    };

    function updateOne() {
        
    };



module.exports = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne
}