var express = require('express');
var app = express();
var addGame = require('./src/controllers/addGameController');
 
app.use(express.static('public'));
app.use(express.static('src/views'));
app.use('/lib', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/lib', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// app.use(cookieParser());
// app.use(session({secret: 'library'}));

// app.get('/', function (req, res) {
//     res.render('index', {
//         title: 'Hello from render',
//         nav: [{
//             Link: '/Books',
//             Text: 'Books'
//         }, {
//             Link: '/Authors',
//             Text: 'Authors'
//         }]
//     });
// });

app.get('/newgame/add/:level', function(req, res){
    addGame.newGame(req, res);
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


app.listen(3001)