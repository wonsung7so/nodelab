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
var logger = require('./middleware/logger');
var static = require('./middleware/static');

var app = connect();

app.use(logger({type: 'file', filename: 'log.txt'}));
app.use(static(path.join(__dirname, 'public')));

app.use(function(err, req, res){
  // 404에러 처리 미들웨어
  res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
  res.end('<h1>' + req.url + ' 파일을 찾을 수 없습니다.</h1>');
});

module.exports = app;