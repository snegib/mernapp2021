import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './Modal';
import { connect } from 'react-redux'; /* STEP 7, Grabbing the HOC. this react-redux lib is connect our contact component to redux store. connect function can invoke to bring back a higher order component. */

const Contact = ({ cards }) => {
  // const Contact = props => {
  //   console.log(props.cards);
  // setTimeout(()=>{
  //     props.history.push("/about")
  // }, 2000)
  // console.log(props)

  console.log("contact ",cards);

  return (
    <div>
      {/* <Modal /> */}
      {cards.map((card, i) => {
        return (
          <div 
            className="ui raised very padded text container segment"
            style={{ marginTop: '80px' }}
            key={i}
            
          >
            <Link to={`/${card.title}`} className="ui header">
              {card.title}
            </Link>
            <p>{card.body}</p>
          </div>
        );
      })}
      {/* <div
        className="ui raised very padded text container segment"
        style={{ marginTop: '80px' }}
      >
        <Link to="/willma" className="ui header">
          Willma
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          pharetra malesuada ipsum, id ornare mauris varius vel. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Suspendisse et
          fringilla elit. Ut arcu tellus, venenatis luctus sapien vel, sodales
          rhoncus libero. Pellentesque nec tempus libero. Nullam at dapibus
          dolor, sit amet auctor leo. Vestibulum luctus faucibus pellentesque.
          Nunc condimentum nunc quis sagittis ultrices. Proin ultricies vel
          mauris ac gravida.
        </p>
      </div> */}
    </div>
  );
};

/* STEP 9 */
const mapStateToProps = state => {
  return {
    /* this is the cards which is use as a props inside our Contact function above */ cards:
      state.cards, // get data from redux
  };
};
/* STEP 10 connect to redux  'connect(mapStateToProps)'*/
export default connect(mapStateToProps)(
  Contact
); /* STEP 8 - Wrapping HOC. And we are wrapping the contact component 'connect()(Contact)'. Inside the higher order component, we are passing the contact component as an argument. Connect is actually a function and that function returns a HOC, so we have to invoke that. connect()*/
