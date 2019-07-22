console.log('m4는 전형적인 모듈.(주로 코어모듈)');
var someObj = {
  createServer: function(fn){},
  readFile: function(filename, fn){},
  join: function(){},
  getType: function(extname){}
};

module.exports = someObj;