import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app =
  express(); /* initialize app with express(), so that we can use different methods with it */
app.use(bodyParser.json({ limit: '32mb', extended: true }));
/* Now in here, we have to do a limit is equal to 32 megabytes. I just did that because we're going to be sending some images which can be large in size and and we're going to say extended is equal to true just like that. */

app.use(
  bodyParser.urlencoded({ limit: '32mb', extended: true })
); /*here, just setting up the body passer so that we can properly send our requests. */


app.use(cors())