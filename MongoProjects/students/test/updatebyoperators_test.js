const assert = require('assert');
const Student = require('../src/student');

describe('delete the records ', () => {
  let suman;
  beforeEach(done => {
    suman = new Student({
      name: 'Suman',
      studentNumber: 2500,
      articleCount: 5,
      grade: 10,
    });

    suman.save().then(() => done());
  });

  xit('update grades with operators', async () => {
    const artCount = await Student.findOne({ name: 'Suman' });
    const student = await Student.updateOne(
      { name: 'Suman' },
      { $mul: { grade: artCount.articleCount } }
    );
    const res = await Student.find({ name: 'Suman' });
    assert(res[0].grade === 50);
    console.log(res);
  });
});
