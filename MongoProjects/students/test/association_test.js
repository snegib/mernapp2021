const mongoose = require('mongoose');
const assert = require('assert');
const Student = require('../src/student');
const Comment = require('../src/comment');
const ArticleBlog = require('../src/articleBlog');
const { populate } = require('../src/student');

describe('Association Test ', () => {
  let suman, articleBlog, comment;
  beforeEach(done => {
    suman = new Student({ name: 'Suman' });
    articleBlog = new ArticleBlog({
      title: 'MongoDB',
      content: 'Mongoose and Mocha',
    });
    comment = new Comment({ content: 'well done!' });

    suman.articleBlog.push(articleBlog);
    articleBlog.comments.push(comment);
    comment.students = suman; /* mongoose understand this is a reference */

    Promise.all([suman.save(), articleBlog.save(), comment.save()]).then(() =>
      done()
    );
  });

  it('Associate student with articleBlog', done => {
    Student.findOne({ name: 'Suman' })
      .populate('articleBlog')
      .then(student => {
        // console.log(student.articleBlog[0]);
        assert(student.articleBlog[0].title === 'MongoDB');
        done();
      });
  });
});
