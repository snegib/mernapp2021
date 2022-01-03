/* STEP 1
how to search record on database?  searching by "ID" 
for example: here we have name "Suman" saved in database as we did in create_test.js
so if we search by 'name' property then it might happen that there would be more record by same 'name' 'Suman'  so we will search by 'ID'*/

const assert = require('assert');
const Student = require('../src/student');

describe('Read the data', done => {
  /* STEP 2 
  So first, we have to be sure that we have a student named 'Suman' inside the collection to find any student. So for that, we'll need to add a 'beforeEach' statement inside the describe block. So the purpose is to insert a record into the students collection named 'Suman'. And that's the way that we're going to have some tests inside the file. So we all just make a new student by saying [Suman = new Student()].*/

  let suman;
  beforeEach(done => {
    suman = new Student({ name: 'Suman' });
    suman.save().then(() => {
      done();
    });
  });

  /* STEP 3
  Now, we have to find a record. so we need to use query.
  There are two different methods in mongoDB to find record. 
  1=> Students.find(criteria) {returns and array}
  2=> Students.findOne(){returns single record}
   */
  it('find all Suman', async () => {
    const students = await Student.find({ name: 'Suman' });
    console.log(students);
    assert(students[0]._id.toString() === suman._id.toString());
    console.log('students[0]._id ', students[0]._id);
    console.log('suman._id ', suman._id);
  });
});
