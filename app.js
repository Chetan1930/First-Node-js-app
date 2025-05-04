const express = require("express");
const path = require("node:path");
const app = express();


// Middleware to parse POST request bodies (optional but useful)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



// Routes
app.get("/", (req, res) => res.render("index"));

app.post("/", (req, res) => res.send("Hello Chetan!"));

app.get("/:username/messages", (req, res) => {
  console.log("Params:", req.params);
  console.log("Query:", req.query);
  res.end();
});

app.get("/about", (req, res) =>
  res.render("about")
);

// Start the server
app.listen(3000, () => console.log("Server started on port 3000"));
