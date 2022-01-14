/* we kept logic of 'server=> routes=> posts.js' inside this 'server=> controller=> posts.js' . because this file could have length because of logics. so we keep logic inside 'server=> controller=> posts.js' and make 'server=> routes=> posts.js' short just to call these logics there. */

/* we are going to import PostMessage  so that we can access real model schema access*/
import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

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

export const updatePost = async (req, res) => {
  const { id: _id } =
    req.params; /* extract the id which we want update by destructuring. and also if we want, we can rename it { id: _id }.
   /posts/123 */
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    /* Here we're going to do one simple check to see if _id is really a mongoose object ID. So to do that first, we have to import Mongoose from Mongoose and then check if it's not valid (!mongoose.Types.ObjectId.isValid(_id))*/
    return res.status(404).send('No post with that ID');
  }
  /* else if the ID is there then we do update or id is valid*/
  /* We're going to call our model, which is the post message, and then we're going to call a method called 'findByIdAndUpdate'. So there we need to pass the _id as the first parameter. here's a second parameter or the argument we have to pass the whole updated 'post', where are we receiving the data for the updates? Well, we are receiving it from the req.body. That is going to be sent from the front end. Now in here, we can pass that post, and finally, we have to specify new to be equal to true. So that we can actually receive the updated version of that post.*/
  const updatePost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  /* so now we have access to the updatePost, and it also is going to be updated in the database. And finally, we can do res.json and we can send over that updated post. So that's going to be it for the update route and the controller. */
  res.json(updatePost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  /* to check if id is valid */
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No post with that ID');
  }
  await PostMessage.findByIdAndRemove(id);

  res.json({ message: 'post deleted successfully.' });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  /* if user is not authenticated */
  if (!req.userId) return res.json({ message: 'Unauthenticated' });
  /* to check if id is valid */
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No post with that ID');
  }
  const post = await PostMessage.findById(id);
  /* And we got the actual post, and now we have to see if the user's ID is already in the like section or if it is not. So that means we can say here, ' const index = post.likes.findIndex' And inside of here, we have a callback function where we loop through all the IDs. 'findIndex((id)=> id);' So each like is going to be the I.D. from a specific person. So that's that's really how we're going to know who liked what specific post. So what we have to do is convert the user I.D. to a string. Then we can say if the 'findIndex(id => id === String(req.userId))'. If that is the case. It means that their user IDs are already in there, and that means that the personnel already like the post. And this is going to be a dislike and not like your post. So how do we do that? ' if(index === -1)'.*/
  const index = post.likes.findIndex(
    id => id === String(req.userId)
  ); /* person already like the post */
  /* So how do we do that?
  Well, we can say if if(index === -1). Only if their I.D. is not in here.Only then is this going to be equal to minus one. So this is if they want to like the post. Else we're going to get the index of the specific. In that case, we want to delete their like or rather dislike that post.*/
  if (index === -1) {
    //like post
    post.likes.push(req.userId);
  } else {
    // delete post
    post.likes = post.likes.filter(id => id !== String(req.userId));
  }

  /* All right, so now that we have the current number of likes, we are going to create the updated post,  in this case, We're simply going to create a new post. So the post we had, we're going to update it because now we have the same old post that now includes a like.  But one more thing that we have to do is add the actual likes to each post. That is going to be in the model => postMessage.js.*/
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  }); /* As a second parameter, we want to pass in our updates, so that's going to be an object. In there, we want to incriminate the likeCount. So we're going to set likeCount to be equal to  post.likeCount. So this post is the post that we're fetching right here, and then what we simply do is increment by one.
  
  Then with update request, we have to specify the third parameter where we say that { new: true }
 */

  res.json(updatePost);
};
