const express = require("express");

const app = express();

app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./layouts");

app.get("/", (req, res) => {
  res.render("main");
});
app.get("/bio", (req, res) => {
  res.render("./partials/bio");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
