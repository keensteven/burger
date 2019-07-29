// var orm = require("./config/orm.js");
var mysql = require("mysql");

var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser')

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection; 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Use Handlebars to render the main index.html page with the plans in it.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { burgers: data });
  });
});

// Create a new burger
app.post("/api/burgers", function(req, res) {
  connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    // Send back the ID of the new burger
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});

// Update a burger
app.put("/api/burgers/:id", function(req, res) {
  console.log("we're here")
  connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [true, req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    connection.query("SELECT * FROM burgers", function (err, result) {
    if (err) {
      return res.status(500).end();
  
    }
    res.render("index", { burgers: result });
    })

  });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
