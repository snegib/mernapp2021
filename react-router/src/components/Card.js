import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
   console.log(props);
  }

  state = {user: ''}
  componentDidMount(){
      console.log(this.props);
      let user = this.props.match.params.user
      this.setState({user: user})
  }

  
  render() {
      const {user}= this.state
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: '80px' }}
      >
        <h3 className="ui header">{user}</h3>
      </div>
    );
  }
}

export default Card;
