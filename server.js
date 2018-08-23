var app = require("./controllers/burgers_controllers");
var Orm = require("./config/orm");


var handlebars = require("express-handlebars")

/*
app.engine('handlebars', 
    handlebars({
        defaultLayout: "main",
    })); 
app.set("view engine", "handlebars");
*/