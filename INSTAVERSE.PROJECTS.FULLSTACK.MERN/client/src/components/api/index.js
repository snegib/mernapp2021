import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => {
  axios.get(url); /* return all the post currently have in the database */
};
