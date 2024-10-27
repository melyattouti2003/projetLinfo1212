const e = require("express");
var express = require("express");
var session = require("express-session");
var app = express();

app.set("view engine", "ejs");
app.set("views", "static");
// création de la session avec le mot de pass "123pass"
app.use(
  session({
    secret: "123pass",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
  })
);

function verify_user_password(user, password) {
  /**
   * pre: user est le nom d'utilisateur, password est le mot de passe de l'utilisateur
   * post:return true si le mot de passe et l'utilisateur coresponde et qu'ils sont dans
   *      la base de donnés
   */
  for (const e in listeMDP) {
    if (user == e && password == e[0]) {
      return true;
    }
  }
}

app.get("/", (req, res) => {
  if (req.session.username != undefined) {
    // vérifie si la session est lié à un utilisateur
    res.render("principale", { user: req.session.username });
  } else {
    res.render("principale");
  }
});

app.get("/incident.ejs", (req, res) => {
  // vérifie si la session est lié à un utilisateur
  if (req.session.username != undefined) {
    res.render("incident", { user: req.session.username });
  } else {
    res.render("incident");
  }
});

app.get("/identification.ejs", (req, res) => {
  res.render("identification");
});
// verifier le mot de passe de l'utilsateur et retourne la page d'acceuil avec son username afficher
// sinon retourne la page d'identification(ne marche pour qu'un mot de passe)
app.get("/verification", (req, res) => {
  const password = req.query.password_login;
  if (password == "123pass") {
    req.session.username = req.query.username_login;
    res.render("principale", { user: req.session.username });
  } else {
    res.render("identification");
  }
});

// Récupère la description et l'addresse et l'affiche à sur la page principale
app.get("/newIncident", (req, res) => {
  const description = req.query.incident_info;
  const addresse = req.query.incident_adresse;
  res.render("principale", {
    addresse: addresse,
    description: description,
    user: req.session.username,
  });
});

app.use(express.static("css"));
app.use(express.static("javascript"));
app.use(express.static("html"));

app.listen(8080);
