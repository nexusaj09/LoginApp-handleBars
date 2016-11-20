var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
 

app.get('/login', function (req, res) {
    res.render('login');
});
app.get('/', function (req, res) {
    res.render('landingpage');
});
app.get('/dashboard', function (req, res) {
    res.render('dashboard');
});
app.listen(6789)