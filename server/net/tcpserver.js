var net = require('net');
var server = net.createServer(socket => {
  console.log('클라이언트 접속.', socket.remoteAddress);
  socket.write('welcome to TCP Server.');
  // 반드시 error 이벤트는 처리해야 한다.
  socket.on('error', ()=>{});
  // 4. 클라이언트의 메세지 수신
  socket.on('data', data => {
    console.log(data.toString());
    // 5. 클라이언트의 메세지 반송
    socket.write(data);
  });
});
server.listen(3456, () => {
  console.log('TCP 서버 구동 완료.');
});