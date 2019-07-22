var express = require('express');
var router = express.Router();

var model = require('../models/board');
// var model = require('../models/board_mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/board');
});

// 목록 조회
router.get('/board', function(req, res, next) {
  var page = parseInt(req.query.page);
  model.list((list)=>{
    res.render('board/list', { title: '게시물 목록', list: list });
  }, page);
});

// 등록 화면 요청
router.get('/board/new', function(req, res, next) {
  res.render('board/write', { title: '글쓰기' });
});

// 등록 요청
router.post('/board/new', function(req, res, next) {
  var article = req.body;
  model.create(article, no => {
    res.render('board/result', { title: '등록 결과', no: no });
  });  
});

// 상세 조회
router.get('/board/:no', function(req, res, next) {
  var no = req.params.no;
  model.show(parseInt(no), (article)=>{
    res.render('board/view', { title: '내용 조회', article: article });
  });  
});

// 삭제
router.delete('/board/:no', function(req, res, next) {
  var no = req.params.no;
  model.remove(parseInt(no), ()=>{
    res.redirect('/board');
  });  
});

module.exports = router;
