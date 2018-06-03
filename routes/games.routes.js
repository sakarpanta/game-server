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

router.get('/:id', function(req, res, next){
    Game.findById(req.params.id, function(err, game){
        if(err)
            res.send(err);
        res.json(game);
    });
});

module.exports = router;