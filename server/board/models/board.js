var b1 = {
		_id: 0,
		title: '첫번째 게시물',
		writer: '김철수',
		content: '첫번째 게시물 입니다.',
		view: 0,
		regdate: '2099-06-20 12:34'
};
var b2 = {
		_id: 1,
		title: '두번째 게시물',
		writer: '이영희',
		content: '두번째 게시물 입니다.',
		view: 0,
		regdate: '2099-06-21 12:54'
};
var boardList = [b1, b2];

const df = require('date-format');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'boardDB';

var db, dbClient;
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true, poolSize: 10 }, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db = client.db(dbName);
  dbClient = client;
  db.board = db.collection('board');
  db.seq = db.collection('seq');
});

module.exports = {
	list: function(callback, page){
    // TODO: DB에서 목록 조회한 후 결과를 콜백으로 전달
    db.board.find({}, {content: 0})
            .sort({_id: -1})
            .skip((page-1)*10)
            .limit(10)
            .toArray((err, result)=>{
      callback(result);
    });
    // callback(boardList);
	},
	show: function(no, callback){
    // TODO: DB에서 no 게시물을 조회한 후 결과를 콜백으로 전달
    db.board.findOneAndUpdate({_id: no}, {$inc: {view: 1}}, (err, result)=>{
      console.log(result.value.title);
      callback(result.value);
    });
    // callback(boardList[no]);
	},
	create: function(article, callback){
    // TODO: DB에 article을 등록한 후 게시물 번호를 콜백으로 전달
    db.seq.findOneAndUpdate({}, {$inc: {index: 1}}, (err, result)=>{
      article._id = result.value.index;
      article.view = 0;
      article.regdate = df.asString('yyyy-MM-dd hh:mm:ss', new Date());
      db.board.insertOne(article, ()=>{
        callback(article._id);
      });
    });
		// callback(1);
	},
	remove: function(no, callback){
    // TODO: DB에서 no 게시물을 삭제한 후 콜백 호출
    db.board.deleteOne({_id: no}, callback);
    // callback();
	}
};
