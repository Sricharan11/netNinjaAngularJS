var express = require("express");
var path = require("path");

var app = express();

var port = 3000;

app.use(express.static(__dirname + "/app"))
app.use(express.static(__dirname + "/content"))
app.use(express.static(__dirname + "/views"))
app.use(express.static(__dirname + "/data"))

app.get("/", function(req, res) {

	res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, function() {
	console.log("Listening on port: " + port);
})