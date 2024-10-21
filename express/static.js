const e = require("express");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "static");

app.get("/", (req, res) => {
  res.render("principale", {
    user: undefined,
    addresse: undefined,
    description: undefined,
  });
});

app.get("/incident.ejs", (req, res) => {
  res.render("incident");
});

app.get("/identification.ejs", (req, res) => {
  res.render("identification");
});
// verifier le mot de passe de l'utilsateur et retourne la page d'acceuil
// sinon retourne la page d'identification avec son username afficher (ne marche pour qu'un mot de passe)
app.get("/verification", (req, res) => {
  const password = req.query.password_login;
  const user = req.query.username_login;
  if (password == "123pass") {
    res.render("principale", { user: user });
  } else {
    res.render("identification");
  }
});

// Récupère la description et l'addresse et l'affiche à sur la page principale
//
app.get("/newIncident", (req, res) => {
  const description = req.query.incident_info;
  const addresse = req.query.incident_adresse;
  res.render("principale", { addresse: addresse, description: description });
});

app.use(express.static("css"));
app.use(express.static("javascript"));
app.use(express.static("html"));

app.listen(8080);
