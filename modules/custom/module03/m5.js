console.log('m5는 범용성이 필요한 확장모듈이 주로 사용하는 방식(connect의 미들웨어)');

var fs = require('fs');
var os = require('os');
function logger(options){
  if(options && options.type == 'file'){
    var logfile = fs.createWriteStream(options.filename||'logger.log', {flags: 'a'});
  }
  return {
    log: function(msg){
      if(logfile){
        logfile.write(msg + os.EOL);
      }else{
        console.log(msg);
      }      
    }
  };
}
module.exports = logger;