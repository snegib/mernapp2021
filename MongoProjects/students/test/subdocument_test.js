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
  /* it('Adding new record ', done => {
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
  }); */

  it('Remove the record ', done => {
    const suman = new Student({
      name: 'Suman',
      articles: [{ title: 'React Native' }],
    });
    suman
      .save()
      .then(() => {
        Student.findOne({ name: 'Suman' });
        done();
      })
      .then(Student => {
        Student.articles[0].remove();
        done();
        return Student.save();
      })
      .then(() => {
        Student.findOne({ name: 'Suman' });
      })
      .then(Student => {
        assert(student.articles.length === 0);
        done();
      });
  });
});
