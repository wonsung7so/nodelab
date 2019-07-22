var childProcess = require('child_process');
var path = require('path');
var fs = require('fs');

// node mymon.js staticserver03.js 8080
// -> node staticserver03.js 8080

// nodemon staticserver03.js 8080
// mymon staticserver03.js 8080

var argv = process.argv.slice(3);
// 상대경로가 포함된 경로를 절대경로로 반환
var file = path.resolve(process.argv[2]); // staticserver03.js
var filename = path.basename(file);
var child;

function runChild(){
  child = childProcess.fork(file, argv);
  console.log('running node ' + filename, argv);
  child.on('close', function(){
    console.log('stop', filename);
  });
}

runChild();
fs.watchFile(file, function(curr, prev){
  if(child) child.kill();
  setTimeout(runChild, 1000);
});
