var express = require("express");
var burgers = require("../models/burger.js");

var con = require("../config/connection.js");//
var path = require("path");

var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Listening on Port 3030");
})

var handlebars = require("express-handlebars")

var eatenArray;
var uneatenArray;

app.use('/static', express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'bulma')));

app.engine('handlebars', 
    handlebars({
        defaultLayout: "main",
    })); 
app.set("view engine", "handlebars"); 

var orms = require("../config/orm");

app.use(bodyParser());

//creating a new burger
app.post("/api/order", function (req, res) {
    var burgName = req.body.name;
    var burger = new orms.BurgerOrm(con, "burgers");

    burger.insertOne(burgName);
    res.redirect(303, "/");
})

//eating a burger
app.put("/api/eat/:id", function (req, res) {

    var tableId = req.params.id;
    var burger = new orms.BurgerOrm(con, "burgers");

    burger.updateOne(tableId);

    res.redirect(303, "/");
})

app.get("/", async function (req, res, done) {

    var burger = new orms.BurgerOrm(con, "burgers");

    var testing = await burger.selectAll()

    uneatenArray = testing.filter(burg => burg.devoured == 0)
    eatenArray = testing.filter(burg => burg.devoured == 1)

    res.render("index", {burgerUneaten: uneatenArray,
        burgerEaten: eatenArray})
})