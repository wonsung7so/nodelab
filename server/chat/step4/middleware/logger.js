var fs = require('fs');
const EOL = require('os').EOL;

function logger(options){
  if(options && options.type == 'file'){
    var logfile = fs.createWriteStream(options.filename||'logger.log', {flags: 'a'});
  }
  return function(req, res){
    if(logfile){
      logfile.write(`[${Date()}] (${res.statusCode}) ${req.url}`);
      logfile.write(EOL);
    }else{
      console.log(`[${Date()}] (${res.statusCode}) ${req.url}`);
    }
  };
}
module.exports = logger;