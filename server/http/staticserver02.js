var mime = {
  'html': 'text/html',
  'svg': 'image/svg+xml',
  'jpg': 'image/jpeg',
  'png': 'image/png',
  'gif': 'image/gif',
  'css': 'text/css',
  'js': 'application/javascript'
  // ......
};

var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var server = http.createServer((req, res) => {
  if(req.url == '/'){
    req.url = '/index.html';
  }

  var filename = path.join(__dirname, req.url);
  // var extname = path.extname(filename).substring(1);
  // var mimeType = mime[extname];
  // mime@1.x 모듈
  // var mimeType = mime.lookup(filename);
  // mime@2.x 모듈
  var mimeType = mime.getType(filename);

  fs.readFile(filename, (err, data)=>{
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
      res.end('<h1>' + req.url + ' 파일을 찾을 수 없습니다.</h1>');
    }else{
      res.writeHead(200, {'Content-Type': mimeType + ';charset=utf-8'});
      res.end(data);
    }
  });
});
server.listen(80, () => console.log('HTTP 서버 구동 완료.'));