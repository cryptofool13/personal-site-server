const express = require("express");

const app = express();

// const landing = require("./public/html/landing.html");

app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./layouts");

app.get("/home", (req, res) => {
  res.render("main");
});
app.get("/bio", (req, res) => {
  res.render("./partials/bio");
});
app.get("/", (req, res) => {
  res.sendFile(
    "/home/mike/desktop/jsProjects/personal/server/public/html/landing.html"
  );
});
app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
