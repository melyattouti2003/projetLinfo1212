const e = require("express");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "static");

app.get("/", (req, res) => {
  res.render("principale");
});
app.get("/principale.ejs", (req, res) => {
  res.render("principale");
});

app.get("/incident.ejs", (req, res) => {
  res.render("incident");
});

app.get("/identification.ejs", (req, res) => {
  res.render("identification");
});
// verifier le mot de passe de l'utilsateur et retourne la page d'acceuil
// sinon retourne la page d'identification
app.get("/verification", (req, res) => {
  const password = req.query.password_login;
  if (password == "123pass") {
    res.render("principale");
  } else {
    res.render("identification");
  }
});

app.use(express.static("css"));
app.use(express.static("javascript"));
app.use(express.static("html"));

app.listen(8080);
