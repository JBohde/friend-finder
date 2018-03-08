// Dependencies
// =============================================================
const friends = require("./data/friends");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

module.exports = app;