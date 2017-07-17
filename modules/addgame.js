exports.newGame = function (req, res) {
    console.log(req.params.level);
    res.send('New add game level:  ' + req.params.level);
};