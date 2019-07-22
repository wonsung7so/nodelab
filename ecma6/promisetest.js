function f1(){
  console.log('f1 호출.');
}
function f2(){
  console.log('f2 호출.');
}
function f3(){
  console.log('f3 호출.');
}
// 동기 함수 순차 호출
f1(); f2(); f3();

function a1(resolve){
  console.log('a1 호출.');
  setTimeout(function(){
    console.log('a1 작업완료.');
    resolve();
  }, 600);
}
function a2(resolve){
  console.log('a2 호출.');
  setTimeout(function(){
    console.log('a2 작업완료.');
    resolve();
  }, 800);
}
function a3(resolve){
  console.log('a3 호출.');
  setTimeout(function(){
    console.log('a3 작업완료.');
    resolve();
  }, 300);
}
// 비동기 함수 순차 호출
// a1(); a2(); a3();
// a1(function(){
//   a2(function(){
//     a3(function(){
//       // ...
//     });
//   });
// });

function p1(){
  console.log('p1 호출.');
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('p1 작업완료.');
      resolve();
    }, 600);
  });
}
function p2(){
  console.log('p2 호출.');
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('p2 작업완료.');
      resolve();
    }, 600);
  });
}
function p3(){
  console.log('p3 호출.');
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('p3 작업완료.');
      resolve();
    }, 600);
  });
}

// promise 순차적 호출
// p1().then(p2).then(p3);

// ECMA2017


(async function(){
  await p1();
  await p2();
  await p3();
})();




console.log('프로그램 완료.');

/*
var fs = require('fs');
fs.readFile('arrowfunction.js', function(err, result){
  if(err){
    console.error(err);
  }else{
    console.log(result.toString());
  }  
});
// 만약 readFile이 Promise를 반환한다면...
fs.readFile('arrowfunction.js').then(function(result){
  console.log(result.toString());
}).catch(function(err){
  console.error(err);
});
*/
