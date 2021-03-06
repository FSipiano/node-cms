var http = require('http');
var path = require('path');
var express = require('express')
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({ extended: false}));


http.createServer(app).listen(8080, function() { 
  console.log("NodeCMS app started on port 8080.");
});