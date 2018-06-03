var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name: String
});

module.exports = mongoose.model('employee', employeeSchema, 'employee');