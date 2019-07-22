var childProcess = require('child_process');

// 지정한 프로세스 실행
// childProcess.spawn('calc.exe');
// childProcess.spawn('notepad.exe');

// node.exe spawnchild.js
var child = childProcess.spawn('node.exe', ['spawnchild.js'], {
  // 자식 프로세스의 표준 입출력 장치를 지정
  // [stdin, stdout, stderr]

  // inherit: 부모의 표준 입출력 장치를 자식과 공유
  // stdio: ['inherit', 'inherit', 'inherit']
  // stdio: 'inherit'

  // ignore: 사용안함
  // stdio: 'ignore'

  // pipe(기본값): 자식 프로세스의 표준 입출력 장치를 생성된 child_process 객체의
  // stdin, stdout, stderr 속성으로 pipe 연결
  stdio: 'pipe'
});

child = childProcess.spawn('cmd.exe');
child.stdin.write('dir\r\n');

// 4. child -> parent
child.stdout.on('data', function(fromChild){
  console.log('child->parent', fromChild.toString());
});

// 자식프로세스의 표준 입력장치로 메세지 송신
// 1. parent -> child
child.stdin.write('hello child.');