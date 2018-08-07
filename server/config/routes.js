var mongoose = require('mongoose');
var Gold = mongoose.model('Gold');
var golds = require('../controllers/golds.js');
var path = require('path');

module.exports = function(app){

    app.get('/gold/:id', golds.allGold);


}