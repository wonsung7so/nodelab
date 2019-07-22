var path = require('path');
var filename = path.basename(__filename);
console.log(filename, '실행');

process.send('hello parent.');

process.on('message', function(data){
  console.log(data);
});

setTimeout(function(){
  a();
}, 1000);