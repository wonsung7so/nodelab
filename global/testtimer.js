function print(msg){
  console.log(msg);
}
print('1. start');
setTimeout(print, 1000*2, '6. setTimeout');
setInterval(print, 1000*1, '5. setInterval');
setImmediate(print, '4. setImmediate');
process.nextTick(print, '3. nextTick');
print('2. finish');