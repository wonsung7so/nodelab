console.log('m2는 함수를 exports 모듈.');
module.exports = function(name, age){
  return {
    name: name,
    age: age
  };
};