var assert = require('assert');

var article1 = {writer: 'kim', title: '안녕'};
var article2 = {writer: 'kim', title: '안녕'};

// test suite
describe.skip('#동기 테스트', function(){
  // unit test
  it('#assert()', function(){
    assert(1 == 1);
  });
  it('#assert.equal()', function(){
    assert.equal(article1, article2);
  });
  it('#assert.deepEqual()', function(){
    assert.deepEqual(article1, article2);
  });
});

describe('#비동기 테스트', function(){
  // unit test
  it('#assert()', function(done){
    setTimeout(function(){
      assert(1 == 1);
      done();
    }, 1000);    
  });
  it('#assert.equal()', function(done){
    setTimeout(function(){
      assert.equal(article1, article2);
      done();
    }, 1000);
  });
  it('#assert.deepEqual()', function(done){
    setTimeout(function(){
      assert.deepEqual(article1, article2);
      done();
    }, 1000);    
  });
});

// 게시판 기능 테스트
var model = require('../models/board');

var newNo;
describe.only('게시판 테스트', () => {
  // 사전 작업 정의
  before(function(done){
    this.timeout(3000);
    setTimeout(done, 2500);
  });
  var articleList;
  before(done => {
    model.list(list => {
      articleList = list;
      done();
    });
  });
  // 사후 작업 정의
  // after();
  describe('1. 등록', () => {
    it('1-1 등록 요청', done => {
      model.create(article1, no => {
        assert.equal(typeof no, 'number');
        newNo = no;
        done();
      });
    });
    it('1-2 등록한 게시물 조회', done => {
      model.show(newNo, article => {
        assert.deepEqual(article, article1);
        done();
      });
    });
  });
  describe.skip('2. 삭제', () => {
    it('2-1 삭제 요청', done => {
      model.remove(newNo, done);
    });
    it('2-2 목록 조회', done => {
      model.list(list => {
        assert.deepEqual(list, articleList);
        done();
      });
    });
  });
});