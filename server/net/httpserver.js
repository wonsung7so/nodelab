var net = require('net');
var fs = require('fs');
var path = require('path');
var server = net.createServer(socket => {
  // 반드시 error 이벤트는 처리해야 한다.
  socket.on('error', ()=>{});
  // 4. 클라이언트의 메세지 수신
  socket.on('data', data => {
    var msg = data.toString();
    var req = {
      headers: {}
    };
    var arr = msg.split('\n');
    var startLine = arr.shift();  // GET /hello.html http/1.1
    req.method = startLine.split(' ')[0];
    req.url = startLine.split(' ')[1];
    req.httpVersion = startLine.split(' ')[2];

    for(var i=0; i<arr.length; i++){
      if(arr[i].trim().length > 0){
        var header = arr[i].split(':');
        var name = header[0].trim();
        var value = header[1].trim();
        req.headers[name] = value;
      }else{
        break;
      }
    }

    console.log(req.method, req.url, req.httpVersion);
    console.log(req.headers);
    console.log(req.headers['User-Agent']);

    if(req.url = '/'){
      req.url = '/index.html';
    }

    fs.readFile(path.join(__dirname, req.url), (err, data)=>{
      if(err){
        socket.write('HTTP/1.1 404 Not Found\n');
        socket.write('Content-Type:text/html;charset=utf-8\n');
        socket.write('\n');
        socket.end('<h1>' + req.url + ' 파일을 찾을 수 없습니다.</h1>');
      }else{
        socket.write('HTTP/1.1 200 OK\n');
        socket.write('Content-Type:text/html;charset=utf-8\n');
        socket.write('\n');
        socket.end(data);
      }
    });

  });
});
server.listen(80, () => {
  console.log('HTTP 서버 구동 완료.');
});