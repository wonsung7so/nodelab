var fs = require('fs');
var path = require('path');
var mime = require('mime');

/**
 * connect의 미들웨어 조건
 * 1. req, res, next 인자로 받는다.
 * 2. 다음 둘중 하나의 작업으로 끝난다.
 *  - 클라이언트에 응답한다.(res.end())
 *  - 등록된 다음 미들웨어를 호출한다.(next()) 
 *    만약, 에러 처리를 위한 미들웨어를 호출하려면 next(Error 객체) 호출한다.
 */
function staticServer(req, res, next){
  if(req.url == '/'){
    req.url = '/index.html';
  }

  var filename = path.join(base, req.url);
  var mimeType = mime.getType(filename);

  fs.stat(filename, (err, status) => {
    if(err){
      next();
    }else if(status.isFile()){
      res.writeHead(200, {'Content-Type': mimeType + ';charset=utf-8'});
      fs.createReadStream(filename).pipe(res);
    }else{
      res.writeHead(403, {'Content-Type': 'text/html;charset=utf-8'});
      res.end('<h1>디렉토리 접근 권한 없음.</h1>');
    }
  });
}

var base;
function setBase(dir){
  base = dir;
  return staticServer;
}
module.exports = setBase;