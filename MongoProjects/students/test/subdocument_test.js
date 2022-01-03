const assert = require('assert');
const Student = require('../src/student');

describe('validation ', () => {
  it('Creating a subdocument ', done => {
    const suman = new Student({
      name: 'Suman',
      articles: [{ title: 'JavaScript' }],
    });
    suman.save().then(() => {
      Student.findOne({ name: 'Suman' }).then(student => {
        assert(student.articles[0].title === 'JavaScript');
        done();
      });
    });
  });
});
