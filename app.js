const express = require("express");
const fs = require("fs");

const app = express();

app.set("view engine", "pug");


app.get("/", function(req, res) {
  res.render("index.pug", {
    title: "Главная страница"
  });
});

app.get("/about", function(req, res) {
  res.render("about.pug", {
    title: "О проекте"
  });
});

app.listen(3000);


// const jsonParser = express.json();

// app.use(express.static(__dirname + "/public"));

// app.use(function(req, res, next) {
//   let now = new Date();
//   let hour = now.getHours();
//   let data = `${hour} ${req.method} ${req.url}`;
//   fs.appendFile("server.log", data + "\n", function() {});
//   next();
// });

// app.post("/user", jsonParser, function(req, res) {
//   console.log(req.body);
//   if(!req.body) return res.sendStatus(400);

//   res.json(req.body);
// });