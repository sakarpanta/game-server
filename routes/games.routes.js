var express = require('express');
var router = express.Router();

var games_controller = require('../controllers/games.controller');

/* GET all  games. */
router.get('/', games_controller.find);

router.get('/:id', games_controller.findById);

router.post('/', games_controller.create);

router.put('/:id', games_controller.update);

router.delete('/:id', games_controller.delete);

module.exports = router;