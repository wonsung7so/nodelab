var m1 = require('./m1');
var kimScore = new m1.Score(100, 90);
var leeScore = new m1.Score(90, 80);
console.log(kimScore.sum(), kimScore.avg());
console.log(leeScore.sum(), leeScore.avg());
