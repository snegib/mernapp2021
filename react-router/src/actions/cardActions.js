import axios from 'axios'; /* STEP 23 */

export const deleteCard = id => {
  return {
    type: 'DELETE_CARD',
    id: id,
  };
};

/* STEP 24
New action called 'fetchUsers', because the purpose of fetch users is to make an API request.
So inside here, we have to return a function. And that function is going to dispatch the data that we going to fetch from an API to introduce. And again, this time we're going to return a function instead of the JavaScript object. So only with Redux Thunk, we are able to return a JavaScript function.

So the first argument that this function is going to be the dispatch method because we're going to dispatch an action to the reducer. And the action is going to contain type and payload properties.
So we are going to fetch a payload from Jason Placeholder API.
// https://jsonplaceholder.typicode.com/

So first, we should use the import Axios function to fetch data. and after that we get the users call.
Now, right after that, I'm going to use that then as my method, because this is an asynchronous operation. So we should wait to resolve the request. So this then method takes callback, and this callback will provide us the data that we fetch from the Jason API. So let's deconstruct the data here, like so. Now inside of here, we are going to dispatch an action to the reducer.


So that's how we create an action created with asynchronous operations.
So now let's go to the card component and connect this action to the reducer.
*/
export const fetchUsers = () => {
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => {
      dispatch({ type: 'FETCH_USERS', payload: data });
    });
  };
};
