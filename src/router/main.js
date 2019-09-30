module.exports = function (app, fs) {
    app.get('/', function (req,res) {
        res.render('index', {
            userName: req.query.nameQuery
        })
    });

    app.get('/login', function (req,res) {
        res.render('login')
    });

    app.get('/userInfo', function (req,res) {
        res.render()
    });

    app.get('/board', function (req,res) {
        res.render()
    });

    app.get('/game/:gameId', function (req,res) {
        res.render()
    });
}