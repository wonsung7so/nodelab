/**
 * 웹어플리케이션 개발할 때 처리해야 할 작업
 * 1. 로깅
 * 2. url 텍스트 인코딩/디코딩
 * 3. POST 방식의 요청 바디 파싱
 * 4. JSON 방식의 요청 바디 파싱
 * 5. 쿠키 파싱
 * 6. 정적인 자원 응답
 * 7. 세션 구현
 * 8. 동적인 자원 응답
 * 9. 파일 업로드
 * 10. 보안(인증, 권한)
 * 11. 에러 처리
 * ......
 * 
 * 각각의 기능을 독립적인 모듈로(함수) 작성(미들웨어)
 * connect 확장 모듈을 사용
 *  - 미들웨어를 관리하는 컨테이너
 *  - connect@3 -> 미들웨어 관리 기능만 제공
 *  - connect@2 -> 미들웨어 관리 기능 + 미들웨어도 직접 제공
 */

var path = require('path');
var connect = require('connect');
var logger = require('morgan');
var static = require('serve-static');
var session = require('express-session');
var nocache = require('nocache');
var ejs = require('ejs');
var indexRouter = require('./routes/index');
var fs = require('fs');

var app = connect();

app.use(logger('dev'));
app.use(static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  console.log('=== before ===');
  console.log(req.session);
  next();
});

app.use(session({
  cookie: {maxAge: 1000*60*30},
  secret: 'sometxt',
  rolling: true,  // 매 요청마다 쿠키 시간 초기화
  resave: false,  // 세션값이 수정되지 않으면 서버에 다시 저장하지 않음
  saveUninitialized: false  // 세션에 아무값도 지정하지 않으면 클라이언트에 쿠키를 전송하지 않음
}));
app.use(nocache());

app.use(function(req, res, next){
  console.log('=== after ===');
  console.log(req.session);
  next();
});

// ejs view enging 기본 랜더링 엔진으로 설정
app.use(function(req, res, next){
  res.locals = {};
  res.render = function(filename, data){
    var views = path.join(__dirname, 'views');
    var filepath = path.join(views, filename + '.ejs');
    if(!data) data = res.locals;
    ejs.renderFile(filepath, data, (err, result) => {
      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
      res.end(result);
    });
  };
  next();
});

app.use('/', indexRouter);

// 404에러 처리 미들웨어
app.use(function(req, res){
  var err = new Error(req.url + ' 파일을 찾을 수 없습니다.');
  err.status = 404;

  res.locals.message = err.message;
  res.locals.error = err;
  res.render('error'/*, {message: err.message, error: err}*/);
});

module.exports = app;