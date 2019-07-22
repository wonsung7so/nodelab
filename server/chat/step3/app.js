var fs = require('fs');
var path = require('path');
var mime = require('mime');
var logger = require('./middleware/logger');
var static = require('./middleware/static');

function app(req, res){
  static(path.join(__dirname, 'public'))(req, res);
  logger({type: 'file', filename: 'log.txt'})(req, res);
}

module.exports = app;