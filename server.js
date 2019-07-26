// var orm = require("./config/orm.js");

var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// var nonDevouredPlans = plans.filter(function(plan) { return plan.devoured === true })
// Use Handlebars to render the main index.html page with the plans in it.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM plans;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { plans: data });
  });
});

// Create a new plan
app.post("/api/plans", function(req, res) {
  connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    // Send back the ID of the new plan
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});

// Update a plan
app.put("/api/plans/:id", function(req, res) {
  console.log("we're here")
  connection.query("UPDATE plans SET devoured = ? WHERE id = ?", [true, req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    connection.query("SELECT * FROM plans", function (err, result) {
    if (err) {
      return res.status(500).end();
  
    }
    res.render("index", { plans: result });
    })

  });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
