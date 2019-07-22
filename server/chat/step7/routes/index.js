var url = require('url');
var fs = require('fs');
var path = require('path');
var ejs = require('ejs');

var views = path.join(__dirname, '..', 'views');

// 채팅 화면을 보여준다.
function chat(req, res){
  // var nickname = url.parse(req.url, true).query.username;

  var nickname = req.session.nickname;
  res.render('chat', {title: '채팅방', nickname: nickname});

  // if(!nickname){
  //   res.writeHead(303, {Location: '/'});
  //   res.end();
  //   return;
  // }

  // var filename = path.join(views, 'chat.ejs');
  // ejs.renderFile(filename, {title: '채팅방', nickname: nickname}, (err, data) => {
  //   res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  //   res.end(data);
  // });

  // fs.readFile(filename, (err, data) => {
  //   res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  //   data = data.toString().replace('<%=nickname%>', nickname);
  //   res.end(data);
  // });

  // if(nickname && nickname.trim() != ''){
  //   res.writeHead(303, {Location: '/chat.html'});
  // }else{
  //   res.writeHead(303, {Location: '/'}); 
  // }
  // res.end();
}

function login(req, res){
  var nickname = url.parse(req.url, true).query.username;
  if(nickname && nickname.trim() != ''){
    // TODO: session에 대화명 저장
    req.session.nickname = nickname;
    res.writeHead(303, {Location: '/chat'});
  }else{
    res.writeHead(303, {Location: '/'}); 
  }
  res.end();
}

function logout(req, res){
  req.session.destroy();
  res.writeHead(303, {Location: '/'});
  res.end();
}

var router = function(req, res, next){
  var pathname = url.parse(req.url).pathname;
  switch(pathname){
    case '/chat':
      chat(req, res);
      break;
    case '/login':
      login(req, res);
      break;
    case '/logout':
      logout(req, res);
      break;
    default :
      next();
  }
};
module.exports = router;