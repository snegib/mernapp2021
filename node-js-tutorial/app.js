const helper = require('./helper_multipleFunc');
/* call core events module from build in nodejs */
const events = require('events');
console.log(helper.user('Alex'));
console.log(helper.id('123'));
console.log(helper.email('Alex@.com'));

/* we can create custom event from core 'events' module. core 'events' module return 'event emitter' and that is a constructor and we can use that 'event emitter' for crate a custom event. 
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
