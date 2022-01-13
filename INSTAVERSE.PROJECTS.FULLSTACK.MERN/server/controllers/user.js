// import PostMessage from '../models/postMessage.js';
// import mongoose from 'mongoose';
import bcrypt from "bcrypt"/* we are going to need a package called bcrypt, so bcrypt is used to hash the password. */
import { Jwt } from 'jsonwebtoken';/* And that's a really safe way for us to store the users or more specifically, store the user in a browser for a particular period of time, for example, for an hour or two hours, even a week. That way, if the user leaves his site well, they'll be able to stay logged in no matter what. */