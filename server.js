var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('./lib/socket').listen(http);

app.use(express.static('public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

http.listen(3000, function(){
  console.log('listening on port:3000');
});
