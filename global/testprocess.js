console.log('1. process 시작.');

// console.log(process);
// console.log(process.cwd());
// console.log(process.argv);

process.on('exit', function(code){
  console.log('process 종료 직전에 처리할 작업.', code);
  setTimeout(function(){
    console.log('exit 리스너의 비동기 함수는 호출 X');
  }, 1000);
});

try{
  a();
}catch(err){
  console.error(err.message);
}

setTimeout(function(){
  console.log('0.5초 후에 호출되는 함수.');
}, 500);
setTimeout(function(){
  console.log('1.5초 후에 호출되는 함수.');
}, 1500);
setTimeout(function(){
  console.log('1초 후에 프로세스 종료.');
  process.exit(1);
}, 1000);

console.log('2. process 종료.');
