var mongoose = require('mongoose');

var GoldSchema = new mongoose.Schema({
    amount:Number,
    place:String,
    activity:String
})

var Gold = mongoose.model('Gold', GoldSchema);