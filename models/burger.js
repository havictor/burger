var orms = require("../config/orm");


// app.use(bodyParser());

// //render default page
// app.get("/", function (req, res) {
//     res.render("./views/index.html");
// })

// //creating a new burger
// app.post("/api/order", function (req, res) {
//     var burgName = req.body;
//     console.log(req.body.name);
//     var burger = new orms.BurgerOrm(con, "burgers");

//     burger.insertOne(burgName);

// })

// //eating a burger
// app.put("/api/eat/:id", function (req, res) {

//     var tableId = req.param.id;
//     var burger = new BurgerOrm(con, "burgers");

//     burger.updateOne(tableId);

// })


//module.exports = app;