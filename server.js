var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/ninja_gold');
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(8000, function() {
    console.log('Ninja Gold up and running!');
})