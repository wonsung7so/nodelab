function hello(msg){
  return 'Hello ' + msg;
}
console.log(hello('Node'));

// 명시적 내보내기
// module.exports가 require('./hellonode')의 리턴값이 된다.
module.exports = {
  hello: hello
};