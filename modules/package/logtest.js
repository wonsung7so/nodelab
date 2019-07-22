console.log('conosle.log');
console.info('conosle.info');
console.warn('conosle.warn');
console.error('conosle.error');
console.debug('conosle.debug');

var clog = require('clog');
clog.configure({'log level': 2});

clog.log('clog.log');
clog.info('clog.info');
clog.warn('clog.warn');
clog.error('clog.error');
clog.debug('clog.debug');

var tracer = require('tracer').colorConsole({
  dateformat: 'HH:MM:ss'
});
tracer.log('tracer.log');
tracer.info('tracer.info');
tracer.warn('tracer.warn');
tracer.error('tracer.error');
tracer.debug('tracer.debug');
tracer.trace('tracer.trace');
