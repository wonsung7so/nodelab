var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

// 로그파일
var filelog = fs.createWriteStream('log.txt', {flags: 'a'});

var server = http.createServer((req, res) => {
  if(req.url == '/'){
    req.url = '/index.html';
  }

  var filename = path.join(__dirname, req.url);
  var mimeType = mime.getType(filename);

  fs.stat(filename, (err, status) => {
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
      res.end('<h1>' + req.url + ' 파일을 찾을 수 없습니다.</h1>');
    }else if(status.isFile()){
      res.writeHead(200, {'Content-Type': mimeType + ';charset=utf-8'});
      fs.createReadStream(filename).pipe(res);
    }else{
      res.writeHead(403, {'Content-Type': 'text/html;charset=utf-8'});
      res.end('<h1>디렉토리 접근 권한 없음.</h1>');
    }

    // 로깅 메세지 추가
    // filelog.write('['+Date()+'] ('+res.statusCode+') '+req.url);
    filelog.write(`[${Date()}] (${res.statusCode}) ${req.url}`);
    filelog.write(require('os').EOL);
  });
});
var port = process.argv[2] || 80;
server.listen(port, () => console.log('HTTP 서버 구동 완료.'));