const helper = require('./helper_multipleFunc');
/* call core events module from build in nodejs */
const util = require('util');
const events = require('events');
console.log(helper.user('Alex'));
console.log(helper.id('123'));
console.log(helper.email('Alex@.com'));

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
  console.log(arg);
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

util.inherits(teams, event.EventEmitter);
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
    console.log(team.name + ' is ' + nation + ' football club ');
  });
});

Narendra.emit('nation', 'English');
Aarav.emit('nation', 'India');
Suman.emit('nation', 'Italian');
