var express = require("express");
var burgers = require("../models/burger.js");

var con = require("../config/connection.js");//
var path = require("path");

var bodyParser = require("body-parser");

var app = express();

app.listen(3030, function() {
    console.log("Listening on Port 3030");
})

//var handlebars = require("express-handlebars")

/*
app.engine('handlebars', 
    handlebars({
        defaultLayout: "main",
    })); 
app.set("view engine", "handlebars"); //testing
*/

var orms = require("../config/orm"); //temp solution

app.use(bodyParser());

//render default page
app.get("/", function (req, res) {
    res.send().path.resolve("./views/index.html"); //todo: change to render after getting mustachebars working.
})

//creating a new burger
app.post("/api/order", function (req, res) {
    var burgName = req.body.name;
    console.log(req.body.name);
    var burger = new orms.BurgerOrm(con, "burgers");

    burger.insertOne(burgName);

})

//eating a burger
app.put("/api/eat/:id", function (req, res) {

    var tableId = req.params.id;
    console.log(tableId)
    var burger = new orms.BurgerOrm(con, "burgers");

    burger.updateOne(tableId);

})

app.get("/api/showall", function (req, res, done) {

    return new Promise((resolve, reject) => {
        var burger = new orms.BurgerOrm(con, "burgers");
        // console.log(burger.selectAll());
        var testing = burger.selectAll(); //returning undefined?
        //console.log(burger.selectAll)
        //console.log(burger.test);
        // console.log(burger);
        // console.log(testing);

        //console.log(testing);

    
        console.log(testing);
        resolve(res.json(testing));
    })

})