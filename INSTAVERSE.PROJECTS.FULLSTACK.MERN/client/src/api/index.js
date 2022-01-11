import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = newPost => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = id => axios.patch(`${url}/${id}`);
export const likePost = id => axios.patch(`${url}/${id}/likePost`);

export const login = formValues => axios.post('/user/login', formValues);
export const signUp = formValues => axios.post('/user/signup', formValues);
export const signIn = formValues => axios.post('/user/login', formValues);
