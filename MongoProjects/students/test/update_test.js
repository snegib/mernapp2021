const assert = require('assert');
const Student = require('../src/student');

describe('delete the records ', () => {
  let suman;
  beforeEach(done => {
    suman = new Student({ name: 'Suman' });
    suman.save().then(() => done());
  });

  it('set and save', done => {
    console.log(suman);
    suman.set('name', 'Alex'); /* property which need to be update */
    // console.log(suman);
    suman
      .save()
      .then(() => {
        Student.find({});
      })
      .then(students => {
        assert(student[0].name === 'Alex');
        done();
      });
    done();
  });
});
