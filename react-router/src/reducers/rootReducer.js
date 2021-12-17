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
  console.log('rootReducer ', action); /* STEP 4 - pass initialState */

  /* STEP 15
  now we got the action in STEP 14 and according to that action we want to Delete one of the received(id) card,to perform that we need to do little check right here instead //return state;//..
  So I'm going to check that type with the Switch case. */
  // return state;
  switch (action.type) {
    case 'DELETE_CARD' /* STEP 16 
    if this is the action type 'DELETE_CARD', we do something and after that we update our state.
    We don't want to alter the original state. so will use 'filter()' method. it doesn't change original array. it creates a new array.

    So the filter method performs a function on each individual card. And if we return true for that function, then we keep that card in the new array over here. And if we return false, then we'll filter that card out of the new array.
    */:
      let newCard = state.cards.filter(card => {
        return action.id !== card.id; //filtered new array
      });

      return {
        ...state /* STEP 18
We do want to take the current state and we want to spread it like that.
So that all of the properties from the state are returned inside this object.
Then we override the card's property with the new cards. see next line beneath it */,
        cards: newCard /* STEP  17
        So now we need to return a new object, which represents this new state.
        */,
      };

    default:
      return state;
  }
};

export default rootReducer;
