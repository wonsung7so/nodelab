var file = require('fs').createWriteStream('output.txt', {flags: 'a'});
require('net').createServer(s=>{
  s.on('error', ()=>{});
  s.pipe(s);
  s.pipe(process.stdout);
  s.pipe(file);
}).listen(4567);