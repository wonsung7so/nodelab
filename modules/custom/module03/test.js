var m1 = require('./m1'); // return object
console.log(typeof m1, m1.name, m1.type);

var m2 = require('./m2'); // return function
var kim = m2('kim', 30);
var lee = m2('lee', 35);
var hong = require('./m2')('hong', 40);
console.log(typeof m2, kim, lee, hong);

var m3 = require('./m3');
var kimScore = m3({kor: 100, eng: 90});
var leeScore = m3({kor: 90, eng: 80});
console.log(kimScore.sum(), kimScore.avg());
console.log(leeScore.sum(), leeScore.avg());

var m4 = require('./m4');
m4.createServer(function(req, res){});
m4.readFile('hello.html', function(err, data){});
var filename = m4.join(__dirname, 'hello.html');
var mimeType = m4.getType('svg');

var logger = require('./m5')({type: 'console'});
// var logger = require('./m5')({type: 'file', filename: 'log.txt'});
logger.log('접속 시작.');
logger.log('작업 처리중...');
logger.log('접속 종료.');