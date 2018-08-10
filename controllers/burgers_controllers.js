var express = require("express");
var burgers = require("../models/burger.js");

var bodyParser = require("body-parser");

var app = express();

app.listen(3030, function() {
    console.log("Listening on Port 3030");
})

app.use(bodyParser());

//render default page
app.get("/", function (req, res) {
    res.render("./views/index.html");
})

//creating a new burger
app.post("/api/order", function (req, res) {

})

//eating a burger
app.put("/api/:id", function (req, res) {

})


module.exports = app;