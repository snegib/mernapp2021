import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'; // withRouter is higher order component

const Navbar = props => {
  // V6
  // const navigate = useNavigate();
  // setTimeout(()=>{navigate('/')}, 5000)

  //V5
//   setTimeout(() => {
//     props.history.push('/about');
//   }, 2000);
//   console.log(props);

  return (
    <nav className="ui raised very padded segment">
      <a className="ui teal inverted segment">Gloria</a>
      <div className="ui right floated header">
        <button className="ui button">
          <Link to="/">Home</Link>
        </button>
        <button className="ui button">
          <NavLink to="/about">About</NavLink>
        </button>
        <button className="ui button">
          <NavLink to="/contact">Contact</NavLink>
        </button>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
