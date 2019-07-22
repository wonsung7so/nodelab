var assert = require('assert');

// 주어진 인덱스의 위치한 문자를 대문자로 반환한다. 
function getUpperCharacter2(word, index){
  if(index >= word.length || index < 0){
    return null;
  }
  var char = word.charAt(index);
  var upperChar = char.toUpperCase();
  return upperChar;
}

function getUpperCharacter(word, index, callback){
  setTimeout(function(){
    var result = getUpperCharacter2(word, index);
    callback(result);
  }, 1000);
}

// true: 성공, false: 실패
assert(true);
assert(1 == 1);
assert.equal(1, 1);
assert.equal(Math.max(10, 20, 30), 30);

// assert 모듈만 사용할때 부족한점
// 1. 하나라도 테스트를 통과하지 못하면 다음 테스트를 진행하지 않고 
//    각각의 테스트 성공/실패여부를 확인하기 어렵다.
//  -> 각각의 테스트를 독립적으로 진행하기 위해서 try~catch 같은 정교한 코드를 작성해야 한다.
// 2. 비동기 방식의 테스트가 어려움
var successCount = 0;
var failCount = 0;
/*
try{
  assert(getUpperCharacter('hello', 'a') instanceof Error);
  console.log('1. 성공.');
  successCount++;
}catch(err){
  failCount++;
  console.error('1. 실패.', err.message);
}
try{
  assert(getUpperCharacter('hello', 2)=='L');
  console.log('2. 성공.');
  successCount++;
}catch(err){
  console.error('2. 실패.', err.message);
  failCount++;
}try{
  assert.equal(getUpperCharacter('hello', 4), 'O');
  console.log('3. 성공.');
  successCount++;
}catch(err){
  console.error('3. 실패.', err.message);
  failCount++;
}try{
  assert.equal(getUpperCharacter('hello', 6), null);
  console.log('4. 성공.');
  successCount++;
}catch(err){
  console.error('4. 실패.', err.message);
  failCount++;
}try{
  assert.equal(getUpperCharacter('hello', -3), null);
  console.log('5. 성공.');
  successCount++;
}catch(err){
  console.error('5. 실패.', err.message);
  failCount++;
}
*/

getUpperCharacter('hello', 'a', result => {
  try{
    assert(result instanceof Error);
    console.log('1. 성공.');
    successCount++;
  }catch(err){
    failCount++;
    console.error('1. 실패.', err.message);
  }
  getUpperCharacter('hello', 2, result => {
    try{
      assert(result, 'L');
      console.log('2. 성공.');
      successCount++;
    }catch(err){
      failCount++;
      console.error('2. 실패.', err.message);
    }
    console.log('전체 테스트 수:', successCount+failCount);
    console.log('통과한 테스트 수:', successCount);
    console.log('실패한 테스트 수:', failCount);
  });
});




