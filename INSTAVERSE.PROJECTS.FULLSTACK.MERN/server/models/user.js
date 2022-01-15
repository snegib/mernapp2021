import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});
console.log('**** user model **** ', userSchema);
/* now we got the schema above now turn it into the model below */
const User = mongoose.model('User', userSchema);
export default User;
