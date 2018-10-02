var express = require('express');
var router = express.Router();

var employees_controller = require('../controllers/employees.controller');


/* Return all employess */
router.get('/', employees_controller.find);

router.get('/:id', employees_controller.findById);

router.post('/', employees_controller.create);

router.put('/:id', employees_controller.update);

router.delete('/:id', employees_controller.delete);


module.exports = router;