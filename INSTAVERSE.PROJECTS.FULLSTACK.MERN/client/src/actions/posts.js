import * from '../api'/* {*} means that we import everything from the actions as API, and that means we will be able to use this fetch posts like this api.fetchPost. */

/* //action creators
Action creators are functions of return actions. */

const getPosts = ()=>{
    const action = {type: 'FETCH_ALL', payload: []}/* Payload is usually the data where we store all of our posts. */
    return action
}