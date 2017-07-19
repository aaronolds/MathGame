exports.newGame = function (req, res) {
    // console.log(req.params.level);
    res.setHeader('Content-Type', 'application/json');
    var arrayOfObjects = [{ "q": "1 + 0", "a": "1" },
    { "q": "1 + 0", "a": "1" },
    { "q": "1 + 1", "a": "2" },
    { "q": "1 + 2", "a": "3" },
    { "q": "1 + 3", "a": "4" },
    { "q": "1 + 4", "a": "5" },
    { "q": "1 + 5", "a": "6" },
    { "q": "1 + 6", "a": "7" },
    { "q": "1 + 7", "a": "8" },
    { "q": "1 + 8", "a": "9" },
    { "q": "1 + 9", "a": "10" },
    { "q": "1 + 10", "a": "11" }];

    res.send(JSON.stringify(arrayOfObjects, null, 3));
    // switch (req.params.level) {
    //     case 1:
    // // res.send(JSON.stringify([{
    // //     "q": "1 + 0",
    // //     "a": "1"
    // // },
    // // {
    // //     "q": "1 + 1",
    // //     "a": "2"
    // // }, null, 2  ));

    //         ]));
    // };
    // res.send(`New add game level:  ${req.params.level}`);
};