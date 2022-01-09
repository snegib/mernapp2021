import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app =
  express(); /* initialize app with express(), so that we can use different methods with it */
app.use(bodyParser.json({ limit: '32mb', extended: true }));
/* Now in here, we have to do a limit is equal to 32 megabytes. I just did that because we're going to be sending some images which can be large in size and and we're going to say extended is equal to true just like that. */

dotenv.config();
app.use(
  bodyParser.urlencoded({ limit: '32mb', extended: true })
); /*here, just setting up the body passer so that we can properly send our requests. */

app.use(cors());

app.use(
  '/posts',
  postRoutes
); /* Every routes inside the posRoutes reach by //localhost:5000/posts prefix routes. So 'posts' is prefixed word here */

// const CONNECTION_URL =
// 'mongodb+srv://suman:12345@cluster0.khqhx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    process.env.CONNECTION_URL
  ) /* mongoose is to connect with out database */
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on  ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err.message);
  });
