console.log('hello world');
/*  run in terminal 'node app.js or node app' */

console.log(
  __dirname
); /* so it's telling me the directory that I'm currently in the node playlist.*/
console.log(__filename); /* give full file name */

/* normally we write JS function like this. this is js standard function */
function orange() {
  console.log('hello world');
}
orange(); /* invoke it */

/* what is the function expression? setup a variable and assign anonymous function to it, then invoke it by variable name */
const red = function () {
  console.log('Hi there');
};
red();

/* function expression used by call back function. we will see this pattern in through out the node js */
function callbackFunc(func) {
  func();
}
const red1 = function () {
  console.log('Hi there from red1');
};
red1();
