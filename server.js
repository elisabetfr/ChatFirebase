const express = require('express');
const app = express();
var nunjucks = require("nunjucks");

//var dateFilter = require('nunjucks-date-filter');
var env = nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
    noCache: false
});

app.use(express.static('public'));

// Set up a URL route
app.get("/", function(req, res) {
    res.render("layouts/index.html");
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);