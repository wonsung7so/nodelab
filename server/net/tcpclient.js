var net = require('net');
var target = {
  // host: 'localhost',
  // host: '10.5.2.100',
  host: 'google.com',// GET / HTTP/1.1
  port: 80
};

// 1. 소켓 생성
var socket = new net.Socket();
// 2. 서버 접속
socket.connect(target.port, target.host, () => {
  console.log('서버 접속.', target.host + ':' + target.port);
  // 3. 메세지 전송
  // socket.write('hello');

  // 3. 표준 입력장치로부터 메세지를 읽어서 서버에 전송한다.
  process.stdin.on('data', msg => socket.write(msg));
});
// 6. 서버의 메세지 수신
socket.on('data', data => console.log(data.toString()));
