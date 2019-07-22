var EventEmitter = require('events');
class MyEmitter extends EventEmitter{}

var myemitter = new MyEmitter();
myemitter.addListener('event1', print);
myemitter.on('event1', print);
myemitter.once('event1', print);

myemitter.emit('event1', 'msg-1');
myemitter.emit('event1', 'msg-2');

function print(msg){
  console.log(msg);
}