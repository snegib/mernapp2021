import jwt from 'jsonwebtoken';

/* So now, even by looking at this, you can immediately see that our middleware is really similar to what we have on our controllers. 
const auth = async (req, res, next) => {};
but all middleware, has something known as next. So that means do something and then move to the next thing.
 */
const auth = async (req, res, next) => {
  console.log('**** middleware user auth **** ', req, res);
  try {
    /* All right, so after the user is signed up or signed in, they get this specific token. Now, when they want to do something like they'll be delete a post or like a post. Well, we have to check if this token is valid and that's what we're doing with this right here. */
    console.log('middleware req header ', req.headers);
    const token =
      req.headers.authorization.split(
        ' '
      )[1]; /* So we split it, and we only want the token itself, and the token is on the first position in the array after we split it. */

    /* if the token exist */
    let decodeData;
    if (token) {
      decodeData = jwt.verify(
        token,
        'test'
      ); /* Inside of here, we have to pass the token and we need to have that secret we're talking about. */
      /* And now that we have the decoded data, we know which users logged in and which user is, for example, for example, liking the post or deleting the post. So we're going to store their ID in the req.userId. So req.userId. is going to be =decodeData?.id.*/

      req.userId =
        decodeData?.id; /* So this is how we get the user's I.D. if we are working with our own token. */
    }
    next(); /* And finally, we can call next. So that we can pass the action on to the second thing. For example, if the user wanted to delete a post, so let's say a user went in and they want to delete    a post so they have to click the delete button and then this is what happens. */
  } catch (error) {
    console.log(error);
  }
};
export default auth;
/*NOTE Now, the question might become, where do we use that off middleware?

Well, the answer is in the 'routes'. 
For example, we said when somebody delete something from 'routes=> posts.js'

OK, so in that case, we want to use that middleware. */
