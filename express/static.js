var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "static");

app.get("/", (req, res) => {
  res.render("principale.ejs");
});
app.get("/principale.ejs", (req, res) => {
  res.render("principale.ejs");
});

app.get("/incident.ejs", (req, res) => {
  res.render("incident.ejs");
});

app.get("/identification.ejs", (req, res) => {
  res.render("identification.ejs");
});

app.use(express.static("css"));
app.listen(8080);
