var express = require('express');
var router = express.Router();
var Employee = require('../models/employee');

/* GET all employees and if name is provided, search for the name */
router.get('/', function(req, res, next) {
  if(typeof(req.query.name) == "string"){
    console.log("Received query of string: "+req.query.name);
      Employee.find({name: new RegExp(req.query.name, 'i')}, function (err, employees) {
          if (err) throw err;
          console.log(employees);
          res.json(employees);
      });
  }
  else{
    console.log("Query has no parameters. Returning all employees.");
      Employee.find({}, function (err, employees) {
        if (err) throw err;
        console.log(employees);
        res.json(employees);
      });
  }
});

module.exports = router;