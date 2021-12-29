const helper = require('./helper_multipleFunc');
/* call core events module from build in nodejs */
const util = require('util');
const events = require('events');
const fs = require('fs');
console.log('01 ', helper.user('Alex'));
console.log('02 ', helper.id('123'));
console.log('03 ', helper.email('Alex@.com'));

/* 
STEP 1 [custom event with event module]
we can create custom event from core 'events' module. core 'events' module return 'event emitter' and that is a constructor and we can use that 'event emitter' for crate a custom event. 
So I'm going to say, const, myEmitter.				And I'm going to set this to be equal to new.					
And then I'm going to use this variable right here, events.EventEmitter.									
All right, so you see how that works, we've now stored events in myEmitter object right in here.									
So now we can wire up events to this.				So to do that, I'm going to say myEmitter.on					
And then create an event, I'm going to call this event test event. So when this event occurs,  									
then we want to do something in this callback function right here.									
OK, so let's go ahead and emit this event.									
So I'm going to say myEmitter, then .emit then choose an event to emit.									
All right, so we want this test event or whatever you called it to emit.									
And then we could also pass a parameter through to the callback function, so let's say hello world									
is an argument.									
And then this function is going to be called with this hello world argument, right?									
OK, so the first argument in this omit function is the event that we want to admit.									
And then the second one is the arguments or whatever we want to pass through into this function.									
 */

const myEmitter = new events.EventEmitter();
myEmitter.on('test', function (arg) {
  console.log('04 ', arg);
});

myEmitter.emit('test', 'Hello world');

/* 
STEP 1 [custom event with util]
let's create a new eventEmitter. for this we need to call another core module that is called 'UTIL', which is definitely short for utilities. So in this module, this is going to allow us to do well, various things. One of the things that this UTIL module will allow us to do is inherit certain things from objects built into NODE JS. 

And first of all, I'm going to create a new object constructor, so I'll say const teams. This is going to be a function. And this function is going to take in a name as a parameter. And then inside of here, I'm going to say this, that name is equal to name. So whenever we create a new team, we're going to pass it through a name. All right, so let's go ahead and use this UTIL module. 
*/

const teams = function (name) {
  this.name = name;
};

/* 
STEP 2 [custom event with util]
So now I want to inherit the events emitter, because I want any team which is going to be created using
this constructor function to inherit the event emitter so that, well, we can attach custom events to it, see where we're going. 


util.inherits() we pass two argument in it. first thing that we pass through is the object constructor.
That we want to inherit, and that is teams, so we want teams to inherit.
The other thing we want to inherit, which is the events that event.Emitter.
so, event.EventEmitter is going to inherit anything created using this team's constructor.*/

util.inherits(teams, events.EventEmitter);
const Narendra = new teams('Narendra');
const Aarav = new teams('Aarav');
const Suman = new teams('Suman');
/* STEP 3 [custom event with util] 
And I want to wire up some event listeners to each one of these teams using some custom events. And here I'm going to say const Team Array and set that to be equal to an array. */

const teamArray = [
  Narendra,
  Aarav,
  Suman,
]; /* All right, so now we've stored all of them in an array. */

/* STEP 4 [custom event with util] 
So to attach an event listener to each team, I'm going to iterate this array. So now inside this function, we're going to attach listeners to each team now. */

teamArray.forEach(team => {
  team.on('nation', function (nation) {
    console.log('05 ', team.name + ' is ' + nation + ' football club ');
  });
});

Narendra.emit('nation', 'English');
Aarav.emit('nation', 'India');
Suman.emit('nation', 'Italian');

/* STEP 1 [Read file, synchronous Method]
To read file we use readFileSync() method. first parameter is absolute file name and second parameter we need to pass through is the character encoding, because when we go out and read a file, we're dealing with binary data, which is just zeros and ones, right? and store the result in variable 'text'

 */

const text = fs.readFileSync('read-me.txt', 'utf-8');
console.log('06 ', text);

/* STEP 1 [Write file, synchronous Method]
 */
fs.writeFileSync('write.txt', text);

/* STEP 1 [Read file, Asynchronous Method]
To read file we use readFile() method. first parameter is absolute file name and second parameter we need to pass through is the character encoding, because when we go out and read a file, we're dealing with binary data, which is just zeros and ones, right? and store the result in variable 'text'. after that we're going to use a callback function to fire when the process is complete. this function takes two parameter, firs is error and second is data

But now the best thing about this is we're not blocking the code while this is reading the read me file.
check in console. Hi there is printing first before it read the file
 */

const text1 = fs.readFile('read-me.txt', 'utf-8', function (error, data) {
  console.log('07 ', data);
  /* STEP 1 [Write file, Asynchronous Method]
   */
  fs.writeFile('write.txt', data, function (error) {
    if (error) {
      console.log(error);
    }
  });
});
console.log('08 ', 'Hi there');

/*  STEP 1 [create directory, synchronous Method] */
// fs.mkdirSync('my-folder');

/*  STEP 1 [remove directory, synchronous Method]
to run this you need to comment 'fs.mkdirSync('my-folder')'
synchronous is block the further code */
// fs.rmdirSync('my-folder');

/*  STEP 1 [create directory, Asynchronous Method] 
So now I'm going to make a directory asynchronously. So we're saying 'fs.mkdir' to make a directory.
Now, remember, when we use asynchronous methods, we should use a callback function to do something
once this action has been completed.So we can pass that callback function through here as a second parameter, and then we'll do something once it has created the directory.
'fs.mkdir('my-folder', ()=>{ do something });'

So now what I want to do is go ahead and read this read-me.txt file. Now, remember, we do need to say the UTF eight encoding. then, we fire a callback function once this is complete. So it takes in error.
First, as the parameters and then the data we retrieve.
'fs.readFile('read-me.txt', 'utf-8', (error, data) => { do something })

All right, very cool. So first of all, we're making this my folder directory. Then one is complete. We're reading this file. And we're getting the data. So we can fire this callback function when it's finished reading the file. 

And then I want to pass through data into a new file and create that file inside the my-folder directory.
And this is going to write a file in this directory 
'fs.writeFile('./my-folder/write-me.txt', data, () => {});'

All right, so that is the asynchronous way to create a directory.
*/
fs.mkdir('my-folder', () => {
  fs.readFile('read-me.txt', 'utf-8', (error, data) => {
    fs.writeFile('./my-folder/write-me.txt', data, () => {});
  });
});

// fs.unlink('./my-folder/write-me.txt', () => {});
/*  STEP 1 [remove directory, Asynchronous Method] 
we use this method but before that we need to remove the file inside it, like we have 'write-me.txt'
so for this we need to use remove file by using 'fs.unlink' method
fs.unlink('./my-folder/write-me.txt', () => {});
so we need to wrap 'fs.rmdir' within 'fs.unlink'*/

fs.unlink('./my-folder/write-me.txt', () => {
  fs.rmdir('my-folder', error => {
    console.log(error);
  });
});
