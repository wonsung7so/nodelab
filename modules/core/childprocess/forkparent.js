var childProcess = require('child_process');

// node 프로세스를 실행한다.(stdio: 'inherit')
// spawn()과는 다르게 표준 입출력 장치를 사용할 필요 없이
// 전용 IPC 채널을 생성한다.
// var child = childProcess.spawn('node.exe', ['forkchild.js']);
var child = childProcess.fork('forkchild.js');

child.send('hello child.');

child.on('message', function(data){
  console.log(data);
});

child.on('exit', function(code){
  console.log('자식 프로세스 종료됨.', code);
});