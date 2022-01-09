export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      console.log('reducers FETCH_ALL payload ', action.payload);
      return action.payload;
    case 'CREATE':
      console.log('reducers CREATE payload ', action.payload);
      return [...posts, action.payload];
    case 'UPDATE':
      /* Well, in this case, we want to return something, of course, and that something is going to be posts.map. Now, quick question. Do you know what is the output of any map at all? Right. it's an array. Which is a good thing. So we'll be mapping over the Post's array. We'll be changing something in there and then we'll be returning the change array. 
      posts.map((post)=>{})
      So inside of the map, we have a single post, and then what we'll do is we're going to have a ternary expression in there. We're going to say, if post._id is equal to the 'action.payload'. Keep in mind that 'action.payload', is the updatedPost. So if the post._id is equal to the 'action.payload._id', then we want to return the 'action.payload'. this is because 'action.payload' is the newly updatedPost. Otherwise, we want to return just the post as it was without any updates. All right. */
      posts.map(post =>
        post._id === action.payload._id ? action.payload : posts
      );
      console.log('reducers UPDATE payload ', action.payload);
      return [...posts, action.payload];
    default:
      return posts;
  }
};
