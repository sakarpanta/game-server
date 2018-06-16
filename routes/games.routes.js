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

router.post('/id/:id', function(req, res){
    console.log('Got in post :id');

    return Game.findById(req.params.id, function (err, game){
        game.title      = req.body.title;
        game.location   = req.body.location;
        game.time       = req.body.time; 
        game.players    = req.body.players;

        return game.save(function (err) {
            if (!err) {
              console.log("updated");
            } else {
              console.log(err);
            }
            return res.send(game);
        });
    });
});

module.exports = router;