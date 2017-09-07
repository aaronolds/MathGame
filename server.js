var express = require('express');
var app = express();
var addGame = require('./src/controllers/addGameController');
var subtractGame = require('./src/controllers/subtractGameController');
var multiplyGame = require('./src/controllers/multiplyGameController');
var divideGame = require('./src/controllers/divideGameController');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use('/lib', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/lib', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.get('/newgame/add/:level', function(req, res){
    addGame.newGame(req, res);
});

app.get('/newgame/subtract/:level', function(req, res){
    subtractGame.newGame(req, res);
});

app.get('/newgame/multiply/:level', function(req, res){
    multiplyGame.newGame(req, res);
});

app.get('/newgame/divide/:level', function(req, res){
    divideGame.newGame(req, res);
});


// app.listen(3001)
// finally, let's start our server...
var server = app.listen( process.env.PORT || 3001, function(){
    console.log('Listening on port ' + server.address().port);
  });
// module.exports = app;