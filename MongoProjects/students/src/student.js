const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* schema says what property we expect in a model */
const StudentSchema = new Schema({
  name: String,
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
