// Express here
var express = require("express");
var app = express();
var path = require("path");

const converter = require("../utils/converter");
const bodyParser = require("body-parser");

mapFunctions = {
  "Convert F to C": converter.convertFToC,
  "Convert C to K": converter.convertCToK,
  "Convert F to K": converter.convertFToK,
};

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', "ejs");
app.set("views", "./views");

app.get("/", function (request, response) {
  return response.render("index", {
    conversions: ["Convert F to C", "Convert C to K", "Convert F to K"],
  });
});
app.post("/convert", function (request, response) {
  console.log(request.body.conversion);
  return response.render("result", {
    conversion: request.body.conversion,
    value: mapFunctions[request.body.conversion](
      parseFloat(request.body.temperature)
    ),
  });
});

// app.listen(3000)
module.exports = app;
