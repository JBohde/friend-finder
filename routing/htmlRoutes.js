const friends = require("../data/friends");
const path = require("path");

module.exports = function(app) {
// Basic route that sends the user to the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

// Basic route that sends the user to the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
