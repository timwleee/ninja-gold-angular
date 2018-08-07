var mongoose = require('mongoose');
var Gold = mongoose.model('Gold');
var bodyParser = require('body-parser');

module.exports = {
    
allGold: (req,res)=> {
    if (req.params.id == "farm") {
        Gold = {
            amount: Math.floor(Math.random()*100),
        }
    }
    if (req.params.id == "cave") {
        Gold = {
            amount: Math.floor(Math.random()*100),
        }
    }
    if (req.params.id == "house") {
        Gold = {
            amount: Math.floor(Math.random()*100),
        }
    }
    if (req.params.id == "casino") {
        Gold = {
            amount: Math.floor(Math.random()*100),
        }
    }
    res.json({gold:Gold})
},

}