const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* schema says what property we expect in a model */
const ArticleSchema = new Schema({
  title: String,
});

module.exports = ArticleSchema;
