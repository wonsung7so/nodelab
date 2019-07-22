var Browser = require('zombie');
Browser.localhost('localhost', 80);

describe('게시판 테스트', () => {
  describe('메인 페이지 접속', () => {
    var browser = new Browser();
    before(done => {
      browser.visit('/', done);
    });
    it('접속 성공 여부', () => {
      // 응답 성공시 받는 2xx, 3xx 응답상태 코드 확인
      browser.assert.success();
    });
    it('목록 화면 체크', () => {
      browser.assert.text('header h1', '게시물 목록');
    });
  });
  describe('게시물 등록', () => {
    var browser = new Browser();
    before(done => {
      browser.visit('/board/new', done);
    });
    it('등록 화면 체크', () => {
      browser.assert.success();
      browser.assert.text('header h1', '글쓰기');
    });
    it('등록 요청', done => {
      browser.fill('writer', '좀비');
      browser.fill('title', '난 좀비다.');
      browser.fill('content', '좀비가 등록한 내용.');
      browser.pressButton('#regist', done);
    });
    it('등록 결과 화면', () => {
      browser.assert.success();
      browser.assert.text('header h1', '등록 결과');
    });
  });
});