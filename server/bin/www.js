// Express here
var express = require("express");
var app = express();
var path = require("path");

const converter = require("../utils/converter");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function (request, response) {
  return response.render("index");
});
app.post("/ctok", function (request, response) {
  return response.render("result", {
    source: "Celsius",
    target: "Kelvin",
    value: converter.convertCToK(parseFloat(request.body.temperature_1)),
  });
});

app.post("/ftok", function (request, response) {
  return response.render("result", {
    source: "fahrenheit",
    target: "kelvin",
    value: converter.convertFToK(parseFloat(request.body.temperature)),
  });
});

app.post("/ftoc", function (request, response) {
  return response.render("result", {
    source: "fahrenheit",
    target: "celsius",
    value: converter.convertFToC(parseFloat(request.body.temperature_2)),
  });
});

app.listen(3000);
