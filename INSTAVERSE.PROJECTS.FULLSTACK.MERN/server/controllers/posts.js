/* we kept login of 'server=> routes=> posts.js' logic inside this file. because this file could have length so we keep logic here and make 'server=> routes=> posts.js' short just to call these logics there. */

export const getPosts = (req, res) => {
  res.send('Post works!');
};
