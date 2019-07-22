process.stdin.on('data', function(msg){
  // process.stdout.write(msg/* + require('os').EOL*/);
  console.log(msg.toString());
});

// process.stdin.emit('data', new Buffer('hello'));