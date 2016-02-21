var express = require('express');
var app = express();
var logger = require('morgan');
var path = require('path');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const port = 3007;

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

app.listen(port, function () {
  console.log("Started server on " + port);
});