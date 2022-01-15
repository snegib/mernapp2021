// import mongoose from 'mongoose';

import jwt from 'jsonwebtoken'; /* And that's a really safe way for us to store the users or more specifically, store the user in a browser for a particular period of time, for example, for an hour or two hours, even a week. That way, if the user leaves his site well, they'll be able to stay logged in no matter what. */
import bcrypt from 'bcryptjs'; /* we are going to need a package called bcrypt, so bcrypt is used to hash the password. */
import User from '../models/user.js';

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log('**** user controller login **** ', email, password);
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "The email you entered doesn't belong to an account." });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(404).json({ message: 'Password was incorrect.' });
    /* So moving on, if the user already exists in the database. And if the password is correct, then we can finally get the Json Web token that we need to send to the front end. And there we've got to provide all the information that we want to store in the token. And there we've got to provide all the information that we want to store in the token.
      So the second argument to the Jwt sign is the 'secret'. So instead of write word 'secret', You have to have the secret string that only, you know. That's why it's a secret. So usually you would put it in a separate .env file. Where you store all of your variables, where nobody else can see. So in this case, we can simply say test right there, and that's going to be enough. 
      OK, so finally, the last thing is the options object, so inside of here, one of the options we'll use is expired in and we're going to say expires in one hour. Just one h. And that's going to be it for our token.*/
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      'test',
      { expiresIn: '1h' }
    );

    /* now finally return */

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  console.log('**** user controller signup **** ', req.body);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'User already exist' });

    /* is password is same as the confirmed password */
    if (password !== confirmPassword)
      res.status(400).json({ message: "Password don't match" });
    /* if don't have the existing user and if password matched. that means we're good to go to create this user. However, before we created, we do have to hash the password because we don't want a stored in plain text.so we say const hashPassword*/
    const hashedPassword = await bcrypt.hash(
      password,
      12
    ); /* the second thing that you pass in is called salt. And that is a level of difficulty that you want to use to hash your password. Now people typically use 12. So now that we have this hashed password, we have to create our user.*/

    /* Create user */
    const result = await User.create({
      email,
      password,
      hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    /*  now we also create the token*/

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', {
      expiresIn: '1h',
    });
    /* finally return user */
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export { login, signup };
