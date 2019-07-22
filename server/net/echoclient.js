var s = require('net').createConnection(4567, 'localhost');
process.stdin.pipe(s).pipe(process.stdout);