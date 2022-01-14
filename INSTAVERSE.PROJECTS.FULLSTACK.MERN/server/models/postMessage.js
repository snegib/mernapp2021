import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  like: {
    /* So far, what we had was the like count. We no longer have the like count. We are going to have likes, so the array of likes inside of there, the tape is actually going to be an array of strings. And this is how we write that. So the array of IDs and then the default value is going to be an empty array. We are going to have likes, so the array of likes inside of there, the type is actually going to be  an array of strings. And this is how we write that. So the array of IDs and then the default value is going to be an empty array.*/
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

/* now we got the schema above now turn it into the model below */
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
