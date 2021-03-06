import React from 'react';
import { connect } from 'react-redux';
import {
  deleteCard,
  fetchUsers,
} from '../actions/cardActions'; /* STEP 25 call new action 'fetchUsers and connect this action to the reducer.*/

class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log('Card ', props);
  }

  // state = { user: '' };
  // componentDidMount() {
  //   console.log(this.props);
  //   let user = this.props.match.params.user;
  //   this.setState({ user: user });
  // }

  /* STEP 27 
   So I'm going to call it inside the 'componentDidMount' lifecycle method. And I want to get data after the component mounted in dumb.  All right. So now we can reach that data inside of our reducers, so let's go back to the rootReducer.js.*/
  componentDidMount() {
    this.props.fetchUsers();
  }

  onButtonClick = () => {
    let id = this.props.card.id;
    this.props.deleteCard(id);
    /* STEP 19
    as soon as card is deleted from the browser we get error message of title undefined, which is fine as the card is deleted. so immediately we will redirect to the contact page instead of showing blank page with error.  */
    this.props.history.push('/contact');
  };

  render() {
    /* STEP 31  reach the users inside our component that we fetched from an API */
    console.log('card render users ', this.props.users);
    console.log('card render ', this.props);
    // const { user } = this.state;
    // const { title, body } = this.props.card;
    /* STEP 32 
    now we will  map users and show it to the content in the browser */
    const { users } = this.props;
    return users.map(user => {
      return (
        <div
          className="ui raised very padded text container segment"
          style={{ marginTop: '80px' }}
          key={user.id}
        >
          <h3 className="ui header">{user.name}</h3>
          <p>{user.email}</p>
          {/* this button will call  'deleteCard' method at some point of time */}
          <button
            className="ui primary right floated button"
            onClick={this.onButtonClick}
          >
            Delete
          </button>
        </div>
      );
    });
  }
}

/* STEP 11 
IF WE USE THIS COMPONENT ROOT PROPS:-
we can take 2nd parameters and call it 'ownProps'. this will contain the information about the root parameters. And we can grab the root parameter from the root and then what we're going to do is use that root parameter to find the particular card that we want to connect from the Redux store.*/

const mapStateToProps = (state, ownProps) => {
  let title = ownProps.match.params.user; /* this is from the root */
  console.log('card state ', state); /* this is from redux */
  return {
    /*return 'card' prop  with certain values */ card: state.cards.find(
      /* state.cards coming from redux store, check cards in rootReducer.js */
      card => {
        /* single card return */
        return (
          card.title ===
          title /* check  redux title with ownProps or root props title value */
        );
      }
    ),

    /* STEP 30 
    we add users, And this is going to be equal to state that users like so. Now we can reach the users that we fetched from an API inside of our component.*/
    users: state.users,
  };
};

/* STEP 12 
IF WE WANT TO CHANGE THE STORE STATE. i.e, WE MAY WANT TO DELETE ONE OT THESE CARDS IN THIS PAGE.
So now if we want to make a change to this store state, we have to dispatch an action from the component
and that action is going to contain a type and optional payload. So then the action is dispatched to the reducer, and the reducer then takes that action and checks the type of action, and then it takes in the payload. And the reducer makes that change to the central state. Then when the state changes, we get the updated state as a props inside the component.

For this we use 'mapDispatchToProps' function. this function takes a parameter and that parameter is  'dispatch' method
As we know that to update in store, we dispatch action type to store like// store.dispatch({type: '...'}//) 

But here we are mapping dispatch to props. So we are going to be passing this function, which is in the store and it is 'mapStateToProps' function as a parameter. That means it inside 'mapDispatchToProps', we could just say dispatch and then the action inside of it. We don't need to actually say stored.dispatch.
So what we want to do here (mapDispatchToProps) is return an object, and this object is going to represent properties that we want to get is props inside of this component.

So now we're dispatching this action whenever we call this function.
And this function is going to be attached to our props so that we can use it inside the component.
But before we do that, we're going to need to take this (mapDispatchToProps) and we need to pass it into the connect function, much like we did with the 'mapStateToProps'.

*/
const mapDispatchToProps = dispatch => {
  return {
    deleteCard: id => {
      dispatch(deleteCard(id));
    },
    /* STEP 26
    So then we need to mapDispatchToProps of our card component.  So whenever we call 'fetchUsers()' function, it's going to call 'FETCH_USERS' action and then this action creator is going to make a request to an API and then return us the data. Then we are dispatching that data to the reducer.

    All right, so let's call this function.*/
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
  };
};

/* STEP 13 
So the 'mapStateToProps' function is always going to be the first and then then 'mapDispatchToProps' will
be the second.
*/
export default connect(mapStateToProps, mapDispatchToProps)(Card);
