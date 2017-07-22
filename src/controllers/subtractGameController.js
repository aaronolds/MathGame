exports.newGame = function (req, res) {
    // console.log(req.params.level);
    res.setHeader('Content-Type', 'application/json');

    var arrayOfObjects = [];
    for (var i = 0; i < 11; i++) {
        var obj = {
            q: `${req.params.level} - ${i}`,
            a: i - parseInt(req.params.level)
        };
        arrayOfObjects.push(obj);
    }

    res.send(JSON.stringify(arrayOfObjects, null, 3));
};