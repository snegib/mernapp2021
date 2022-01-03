const assert = require('assert');
const Student = require('../src/student');

describe('validation ', () => {
  /* it('Creating a subdocument ', done => {
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
  }); */

  it('Adding new record ', done => {
    const suman = new Student({
      name: 'Suman',
      articles: [],
    });
    suman.save().then(() => {
      Student.findOne({ name: 'Suman' })
        .then(student => {
          student.articles.push({ title: 'MongoDB' });
          done();
          return student.save();
        })
        .then(() => {
          student.findOne({ name: 'Suman' });
          done();
        })
        .then(student => {
          assert(student.articles[0].title === 'MongoDB');
          done();
        });
    });
  });
});
