var express = require('express');
var fs = require('fs');
buf = new Buffer(20);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(buf.toString(readFileSync('index.html',err)));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
