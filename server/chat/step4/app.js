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
 */



var path = require('path');
var container = require('./container');
var logger = require('./middleware/logger');
var static = require('./middleware/static');

var app = container();

app.use(static(path.join(__dirname, 'public')));
app.use(logger({type: 'file', filename: 'log.txt'}));

module.exports = app;