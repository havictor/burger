var app = require("./controllers/burgers_controllers");
var Orm = require("./config/orm");
var path = require("path");

var handlebars = require("express-handlebars")

// app.use('/static', express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'bulma')));

/*
app.engine('handlebars', 
    handlebars({
        defaultLayout: "main",
    })); 
app.set("view engine", "handlebars");
*/