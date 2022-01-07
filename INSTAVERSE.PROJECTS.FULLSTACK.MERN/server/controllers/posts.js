/* we kept logic of 'server=> routes=> posts.js' inside this 'server=> controller=> posts.js' . because this file could have length because of logics. so we keep logic inside 'server=> controller=> posts.js' and make 'server=> routes=> posts.js' short just to call these logics there. */

/* we are going to import PostMessage  so that we can access real model schema access*/
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  /* each call back function is going to have try and catch block   
    try{

    }catch(error){
        
    }*/
  try {
    /* try happen if code is successful. Post message that find or finding something inside of a model takes time. which means that it is an asynchronous action. for that reason we have to add 'await' in front of it
      const postMessages = await PostMessage.find()
      
       and therefore  we have to make this function asynchronous
       
       export const createPosts =async (req, res) => { */
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    /* if everything fine we will say res.status(200, which means everything went okey. and then we are going to return JSON which is going to simply be an array of all message that we have) */
    return res.status(200).json(postMessages);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
  // res.send('Post works!');
};

export const createPost = async (req, res) => {
  /* with POST request you have access to something know as a request.body. after this we are going to move to front end to create a form and basic layout for making different POSTS.  */
  const body = req.body;

  /* then we need to create a new post. and then pass the values that we are receiving from  the body  */
  const newPost = new PostMessage(body);
  try {
    await newPost.save();
    return res.status(201).json(newPost); /* https://httpstatus.com/ */
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};
