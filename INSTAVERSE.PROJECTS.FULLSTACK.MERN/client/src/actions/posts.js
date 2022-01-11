import * as api from '../api/index';
import {
  FETCH_ALL,
  DELETE,
  UPDATE,
  CREATE,
  LIKE,
} from '../constants/actionTypes';
// import * as api from '../api'
/* {*} means that we import everything from the actions as API, and that means we will be able to use this fetch posts like this api.fetchPost. */

/* //action creators
Action creators are functions of return actions. */
export const getPosts = async dispatch => {
  try {
    const { data } = await api.fetchPosts();
    console.log('actions getPosts ', data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
  /* const action = {
    type: 'FETCH_ALL',
    payload: [],
  }; //Payload is usually the data where we store all of our posts.
  dispatch(action); */
};

/* So to just recap, let's go back action creators are functions that return in action, and action is just an object that has the type and a payload property.
const getPosts = ()=>{
    const action = {type: 'FETCH_ALL', payload: []}
    return action
}

So with Redux-Thunk, since we will be dealing with asynchronous logic. Well, we have to add this async dispatch function in front of it, and then instead of returning the action, we have to dispatch it. 
const getPosts = async(dispatch)=>{
    const action = {type: 'FETCH_ALL', payload: []}
    dispatch(action)
}

Now to actually make this work. We're going to add a few lines. So we're going to add that try and catch block,  
try{}catch(error){}

and then in the try, I'm going to try to fetch all the data from the API. That's right, we can do it like this.  const, we're immediately going to Destructure the data and then is equal to a await api.fetchPosts()
const {data} = await api.fetchPosts()
 
So what we're doing in here is we're first getting the response from the API 
const response = await api.fetchPosts()

and then in the response, we always have the data object which were returning from the back end. And then we get the data and basically data represents a post, yeah.
const {data} = await api.fetchPosts()

So what we can do here is in here,
dispatch({type: 'FETCH_ALL', payload: data })

we can immediately dispatch in action. Right. So and action is, as we said, an object which includes the type that type it is going to be FETCH_ALL and then the payload is going to be data.

So now we are successfully using Redux to actually pass or dispatch an action from the data from our
back end.
*/

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);
    console.log('actions createPost ', data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async dispatch => {
  try {
    const { data } = await api.updatePost(id, post);
    console.log('actions updatePost ', data);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id);
    console.log('actions deletePost ', id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id, post) => async dispatch => {
  try {
    const { data } = await api.likePost(id);
    console.log('actions likePost ', data);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
