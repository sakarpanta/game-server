var express = require('express');
var router = express.Router();
var Game = require('../models/game');  

/* GET all  games. */
router.get('/', function(req, res, next) {
    Game.find({}, function(err, games){
        if(err) 
          res.send(err);
        console.log(games);
        res.json(games);
    });
});

router.get('/id/:id', function(req, res, next){
    console.log('Got in :id');
    Game.findById(req.params.id, function(err, game){
        if(err)
            res.send(err);
        res.json(game);
    });
});

router.get('/todaysgame', function(req, res, next){
    var currentTime = new Date();
    var startOfToday = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
    var endOfToday =  new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate()+1);
    console.log('Finding game for the date: '+startOfToday);
    Game.find({
        time: {
            $gte: startOfToday,
            $lte: endOfToday
        }
    }, function(err, game){
        if(err)
            res.send(err);
        res.json(game);
    });
});

module.exports = router;