var middlewareList = [];

module.exports = function(){
  var container = function(req, res){
    middlewareList.forEach(function(elem){
      elem(req, res);
    });
  };
  container.use = function(middleware){
    middlewareList.push(middleware);
  };
  return container;
};