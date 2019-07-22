var childProcess = require('child_process');

// exec(command[, options][, callback])
// spawn()으로 쉘을 실행한 후에 command를 전송한다.
// 출력이 완료되면 callback 호출
childProcess.exec('dir', function(err, stdoutMsg, stderrMsg){
  if(err) console.error(err);
  console.log(stdoutMsg);
});

// 지정한 명령어를 실행한다.
childProcess.execFile('calc.exe', function(err, stdoutMsg, stderrMsg){
  if(err) console.error(err);
  console.log(stdoutMsg);
});