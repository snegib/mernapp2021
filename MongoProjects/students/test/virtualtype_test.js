const assert = require('assert');
const Student = require('../src/student');

describe('Virtual Type ', () => {
  it('Article counts ', done => {
    const suman = new Student({
      name: 'Suman',
      articles: [{ title: 'First title' }],
    });
    suman
      .save()
      .then(() => {
        Student.findOne({ name: 'Suman' });
        done();
      })
      .then(Student => {
        assert(student.articleCount.length === 1);
        done();
      });
  });
});
