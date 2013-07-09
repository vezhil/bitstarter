var express = require('express');
var fs = require('fs');
var filename = "index.html";
var buffer = new Buffer(256);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  /*onse.send('Hello World 2!');*/
  response.send( function content(filename,encoding){
	buffer = fs.readFileSync(filename);
	return buffer.toString('utf-8');};)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
