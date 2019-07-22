var http = require('http');
var nodestatic = require('node-static');
var file = new nodestatic.Server(__dirname);
var server = http.createServer(function(req, res){
  file.serve(req, res);
});
server.listen(2345);