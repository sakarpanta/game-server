var Employee = require('../models/employee');

/* Create new employee */
exports.create = function(req, res) {
    Employee.create(req.body, function (err, post) {
        if (err)
        	res.send(err);
        res.json(post);
    });
}

/* Return employee(s)
 * API URL: api/employees/
 *			api/employees?name=John%20Smith&email=jsmith@company.com
 *			api/employees?name_like=smith
*/
exports.find = function(req, res) {
  if(req.query.name && req.query.email)
  {
	Employee.findOne({ name: req.query.name, email: req.query.email },'_id name email', function(err, employee){
		if(err)
	    	res.send(err);
		res.json(employee);
	});
  }
  else if (req.query.name_like) {
	Employee.find({name: new RegExp(req.query.name_like, 'i')},'_id name email', function (err, employees) {
	  if (err) 
	  	res.send(err);
	  res.json(employees);
	});
  }
  else {
	  Employee.find({},'_id name email',function (err, employees) {
	    if (err)
	    	res.send(err);
	    res.json(employees);
	  });
  }
};

/* Return employee by id */
 exports.findById = function(req, res) {
	Employee.findById(req.params.id, function(err, employee){
		if(err)
		    res.send(err);
		res.json(employee);
	});
 }

/* Update employee */
exports.update = function(req, res){
	Employee.findByIdAndUpdate(req.params.id, req.body, function (err, post){
        if (err) 
        	res.send(err);
        res.json(post);
    });
}

/* Delete employee */
exports.delete = function(req, res) {
	Employee.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err) 
        	res.send(err);
        res.json(post);
    });
}












