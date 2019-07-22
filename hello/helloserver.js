var http = require('http');
var fs = require('fs');
var path = require('path');
var mymodule = require('./hellonode');
// var server = http.createServer(requestListener);

function requestListener(req, res){
  // client의 요청정보(req)를 분석해서 응답메세지를 전송(res)
  // res.writeHead(200);
  // res.end('<h1>Hello Server</h1>');
  var filename = req.url.substring(1);

  filename = path.join(__dirname, filename);

  // 동기방식의 함수 호출
  /*
  try{
    var data = fs.readFileSync(filename);
    res.writeHead(200);
    res.end(data);
  }catch(err){
    console.error(err);
    res.writeHead(404);
    res.end('<h1>' + filename + ' Not Found!</h1>');
  }  
  */

  // 비동기 방식의 함수 호출
  /*
  fs.readFile(filename, function(err, data){
    if(err){
      console.error(err);
      res.writeHead(404);
      res.end('<h1>' + mymodule.hello(filename) + ' Not Found!!</h1>');
    }else{
      res.writeHead(200);
      res.end(data);
    }
  });
  */

  // 스트림 방식
  var stream = fs.createReadStream(filename);
  stream.on('open', function(data){
    console.log('open');
    res.writeHead(200);
  });
  stream.on('data', function(data){
    console.log('data');
    res.write(data);
  });
  stream.on('close', function(data){
    console.log('close');
    res.end();
  });
  stream.on('error', function(data){
    console.log('error');
    res.writeHead(404);
    res.end('<h1>' + mymodule.hello(filename) + ' Not Found!!</h1>');
  });
}

var server = http.createServer();
server.addListener('request', requestListener);
server.on('error', function(err){
  console.error(err);
  if(err.code == 'EADDRINUSE'){
    server.listen(2345);
  }
});
server.on('listening', function(){
  console.log('HTTP 서버 구동 완료.');
});
server.listen(1234);