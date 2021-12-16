import React from 'react';
import { connect } from 'react-redux';

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

  render() {
    // const { user } = this.state;
    const { title, body } = this.props.card;
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: '80px' }}
      >
        <h3 className="ui header">{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

/* STEP 11 
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
  };
};

export default connect(mapStateToProps)(Card);
