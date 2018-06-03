var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var gameSchema = new Schema({
    title: String,
    location: String,
    time: Number,
    players: [String]
});

module.exports = mongoose.model('game', gameSchema, 'game');