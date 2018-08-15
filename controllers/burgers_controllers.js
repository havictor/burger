var express = require("express");
var burgers = require("../models/burger.js");

var con = require("../config/connection.js");//

var bodyParser = require("body-parser");

var app = express();

app.listen(3030, function() {
    console.log("Listening on Port 3030");
})

var orms = require("../config/orm"); //temp solution

app.use(bodyParser());

//render default page
app.get("/", function (req, res) {
    res.render("./views/index.html");
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