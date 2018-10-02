var Game = require('../models/game');  

/* Create new game */
exports.create = function(req, res) {
    Game.create(req.body, function (err, post) {
        if (err)
        	res.send(err);
        res.json(post);
    });
}

/* Return games(s)
 * API URL: api/games/
 *			api/games?date=1538400600000 (epoch time for clients' start of day)
*/
exports.find = function(req, res) {
  if(req.query.date)
  {
  	var date = new Date(parseInt(req.query.date));
  	Game.find({ time: {
  		"$gte": date,
  		"$lte": new Date().setTime(date.getTime()+86400000)	
  	} }, function(err, games){
  		if (err)
  			res.send(err);
  		res.json(games);
  	});
  }
  else
  {
	Game.find({},function (err, games) {
		if (err)
			res.send(err);
		res.json(games);
	});  	
  }
}

/* Return Game by id */
 exports.findById = function(req, res) {
	Game.findById(req.params.id, function(err, game){
		if(err)
		    res.send(err);
		res.json(game);
	});
 }

/* Update game */
exports.update = function(req, res){
	Game.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) 
        	res.send(err);
        res.json(post);
    });
}

/* Delete game */
exports.delete = function(req, res) {
	Game.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err) 
        	res.send(err);
        res.json(post);
    });
}