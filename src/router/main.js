module.exports = function (app, fs) {
    app.get('/', function (req,res) {
        res.render('index', {
            userName: req.query.nameQuery
        })
    });

    app.get('/login', function (req,res) {
        res.render('login', {
            reqSignUp: req.query.signupQuery
        })
    });

    app.get('/userInfo', function (req,res) {
        res.render()
    });

    app.get('/board', function (req,res) {
        res.render()
    });

    app.get('/game', function (req,res) {
        res.render()
    });
}