var path = require('path');
var filename = path.basename(__filename);
console.log(filename, '실행');

// 2. parent -> child
process.stdin.on('data', function(fromParent){
  // 3. child -> parent
  process.stdout.write(fromParent);
});