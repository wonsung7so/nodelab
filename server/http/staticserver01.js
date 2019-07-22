var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer((req, res) => {
  console.log(req.method, req.url, req.httpVersion);
  console.log(req.headers);
  console.log(req.headers['user-agent']);
  if(req.url == '/'){
    req.url = '/index.html';
  }
  fs.readFile(path.join(__dirname, req.url), (err, data)=>{
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
      res.end('<h1>' + req.url + ' 파일을 찾을 수 없습니다.</h1>');
    }else{
      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
      res.end(data);
    }
  });
});
server.listen(80, () => console.log('HTTP 서버 구동 완료.'));