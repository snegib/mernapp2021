/* 
This code is one of helper function. So what if we want to use this functionality elsewhere in  Application, for example, in the app.js? So in that case, we can use the 'requir' function. which is on a global object in NODEJS to make this module accessible from other files. so let's use the REQUIR function in app.js 

So what we have to do inside this module is explicitly say what part of the module that we want to make
available to all the files which require this module.
Now, it's actually very easy, whether we do it is just by saying module.exports.
Then we set this to be equal to whatever we want to be made available outside of this module.

 */
const helper = function (data) {
  return `${data} is logged in`;
};
// run this code in terminal by 'node helper'
// console.log(helper('Alex'));

module.exports = helper;
