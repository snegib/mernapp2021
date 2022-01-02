const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/students_test', {
  useNewUrlParser: true,
});

mongoose.connection
  .once('open', () => {
    console.log('we are connected');
  })
  .on('error', error => {
    console.log('error occured ', error);
  });
