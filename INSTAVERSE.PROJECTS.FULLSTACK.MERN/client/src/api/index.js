import axios from 'axios';

// const url = 'http://localhost:5000';
const API = axios.create({ baseURL: 'http://localhost:5000' });


/* One point, in fact, are middleware wouldn't be able to work without that one thing, and that one thing is adding something specific to each one of our requests. 
API.interceptors.request
All right, so this is going to be a function that's going to happen on each one of our request.
So and here we can say that use and then you provide a callback function, and that callback function
gets a request as the first parameter.
API.interceptors.request.use((req)=> )
So again, this is going to happen before all of these requests.*/

API.interceptors.request.use(req => {
  console.log("client api interceptors ",  req);
  /* So wait a minute, why do we need this, because we have to send our token back to our back in?
So that the back end middleware can verify that we are actually logged in, right, so that we can to
say if localStorage.getItem. And we want to get the item of the 'profile' because that's where we saw the token. So if that exists and we want to add something to our request and that something is going to be req.headers.Authorization just like this. So remember, if we go back to the back end and take a look at our middleware right there. You can see that we're taking something from 'req.headers.authorization.split(' ')[1];' Now that they look at it.

And here, We'll need to put our token and the token is going to be a string. And it starts with the word bearer. Right, so this is going to be a bearer token. All right. So this first thing, the bearer is just a string. Then the second thing divided by a space is the actual token. So he can get that by saying, JJSON.parse(). Inside a here. And then finally, on that profile, we need to say that token like this.
`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
So we want to get the token from that specific profile.*/
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
    /* So we're adding the bearer preppending that string to our token.And now we're adding that to each and every request.*/
  }
  /* One more thing with interceptors, we have to return the actual request so that we can make all of these future requests. So that our back end will be able to get a specific header, and then based on that header, we can do what we've done here.*/

  return req;
});

// const instance = axios.create();
export const fetchPosts = () => API.get('/posts');
export const createPost = newPost => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = id => API.delete(`/posts/${id}`);
export const likePost = id => API.patch(`/posts/${id}/likePost`);

export const login = formValues => API.post('/user/login', formValues);
export const signUp = formValues => API.post('/user/signup', formValues);
