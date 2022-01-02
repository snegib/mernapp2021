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

/*  beforeEach is a hook and it will run before each test, so it'll empty out our database and then run our test. Now, the challenging part here is that we've got to find our collection of students and drop all the records inside.  when Mongoose starts to reach out to Mangodb, it takes a little time to show the
results. Whether it's a failure or a success. So just like that, this idea can apply to every operation on a collection. So, you know, the Mongoose is asynchronous. So because of that, we've got to be sure that we pause the testing environment and tell Mocha to stop until this rather long operation is over.
So here's where we use callback.
(done) => {
  Mongoose.connection.collections.students.drop();
}

This is the done call back. After the long running process is done. We'll call this done callback, which is provided by Mocha automatically. Now, the tests will continue after we call this done.*/
beforeEach(done => {
  mongoose.connection.collections.students.drop();
  done();
});
