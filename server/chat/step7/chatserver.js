function server(io){
  io.on('connection', (socket)=>{
    socket.on('login', (nickname)=>{
      socket.nickname = nickname || 'Guest';
      io.emit('chat', `시스템: ${socket.nickname}님이 입장했습니다.`);
    });
    socket.on('chat', (msg)=>{
      io.emit('chat', `${socket.nickname}: ${msg}`);
    });
    socket.on('disconnect', ()=>{
      io.emit('chat', `시스템: ${socket.nickname}님이 퇴장했습니다.`);
    });
  });
}
module.exports = server;