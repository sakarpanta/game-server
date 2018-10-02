var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('employees', employeeSchema, 'employees');