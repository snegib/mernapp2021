const assert = require('assert');
const Student = require('../src/student');

describe('delete the records ', () => {
  let suman;
  let aarav;

  beforeEach(done => {
    suman = new Student({ name: 'Suman' });
    aarav = new Student({ name: 'Aarav' });
    aarav.save();
    suman.save().then(() => {
      done();
    });
  });

  it('delete by id', done => {
    Student.findByIdAndDelete(suman._id)
      .then(() => {
        Student.findOne({ name: 'Suman' });
        done();
      })
      .then(student => {
        assert(student === null);
        done();
      });
  });

  it('delete by name', done => {
    Student.findOneAndDelete({ name: 'Suman' })
      .then(() => {
        Student.findOne({ _id: suman._id });
        done();
      })
      .then(student => {
        assert(student === null);
        done();
      });
  });

  it('delete Suman', done => {
    Student.deleteOne({ _id: suman._id })
      .then(() => {
        Student.findOne({ name: 'Suman' });
        done();
      })
      .then(student => {
        assert(student === null);
        done();
      });
  });
});
