/* STEP 3
set the initial state
*/
const initialState = {
  cards: [
    {
      id: 1,
      title: 'Alex',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra',
    },
    {
      id: 2,
      title: 'Willma',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra',
    },
    {
      id: 3,
      title: 'John',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra',
    },
  ],
};

/* STEP 2 
this reducer takes two arguments, first initial state and second is action 
*/
const rootReducer = (state = initialState, action) => {
  /* STEP 14
  this will let us know our action */
  console.log('rootReducer ', action);
  /* STEP 4 - pass initialState */
  return state;
};

export default rootReducer;
