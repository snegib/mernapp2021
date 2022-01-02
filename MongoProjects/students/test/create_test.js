/* in Mocha we have 'describe' and 'it' function  */

const assert = require('assert');
const Student = require('../src/student');

/* describe function have two arguments. first is 'String' and second is 'callback function' */
describe('create the first data', () => {
  it('save the student', () => {
    /* we make assertion here. assertion is compare two values. it will be a boolean  and if everything go well with the code expectation then out test passes. to see the result run 'npm run test' */
    assert(2 + 3 == 5);
    const suman = new Student({
      name: 'Suman',
    });
    suman.save(); /* to save in database. persist to database . mongoose will insert into this to database*/
  });
});
