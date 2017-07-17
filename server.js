var express = require('express');
var app = express();
var addgame = require('./modules/addgame');
 
app.get('/', function (req, res) {
  res.send('Hello World')
});
 

app.get('/newgame/add/:level', function(req, res){
    addgame.newGame(req, res);
});

app.get('/newgame/subtract/:level', function(req, res){
    res.send('new game');
});

app.get('/newgame/multiply/:level', function(req, res){
    res.send('new game');
});

app.get('/newgame/divide/:level', function(req, res){
    res.send('new game');
});


app.listen(3000)