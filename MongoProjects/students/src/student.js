const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = require('../src/article_schema');

/* schema says what property we expect in a model */
const StudentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    validate: {
      validator: name => name.length > 2,
      message: 'Name is too short',
    },
  },
  studentNumber: Number,
  /*  articleCount: Number, // we make this virtual property */
  grade: Number,
  articles: [ArticleSchema],
  articleBlog: [
    {
      type: Schema.Types.ObjectId,
      ref: 'articleBlog',
    },
  ],
});

StudentSchema.virtual('articleCount').get(function () {
  console.log('Run the getter function');
  return this.articles.length;
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
