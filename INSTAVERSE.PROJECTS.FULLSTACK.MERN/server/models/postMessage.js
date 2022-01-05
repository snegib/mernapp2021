import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selecttedFile: String,
  linkCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

/* now we got the schema above now turn it into the model below */
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
