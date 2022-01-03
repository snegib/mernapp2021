const assert = require('assert');
const Student = require('../src/student');

describe('delete the records ', () => {
  let suman;
  let suman2;
  beforeEach(done => {
    suman = new Student({ name: 'Suman', studentNumber: 2500 , grade: 10});
    suman2 = new Student({ name: 'Suman', studentNumber: 3500, grade : 10 });
    suman2.save();
    suman.save().then(() => done());
    console.log('update_test suman ', suman);
    console.log('update_test suman2 ', suman2);
  });

  /* it('set and save', done => {
    console.log(suman);
    suman.set('name', 'Alex'); 
    // set property is do, which data need to be update
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
  }); */

  /* it('update one of the Suman', async () => {
    const student = await Student.updateOne(
      { name: 'Suman' },
      { studentNumber: 3000 }
    );
    const res = await Student.find({});
    assert(res[0].studentNumber === 3000);
    console.log(res);
  }); */

  it('update Suman', async () => {
    const student = await Student.updateMany(
      { name: 'Suman' },
      { studentNumber: 3000 }
    );
    const res = await Student.find({});
    assert(res[0].studentNumber === 3000 && res[1].studentNumber === 3000);
    console.log(res);
  });
});
