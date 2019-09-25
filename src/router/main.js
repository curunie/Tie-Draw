module.exports = function (app, fs) {
    app.get('/', function (req,res) {
        res.render('index', {
            title: '홈페이지',
            name: req.query.nameQuery
        })
    });

    app.get('/login', function (req,res) {
        res.render('login')
    });

    app.get('/userInfo', function (req,res) {
        res.render()
    });
}