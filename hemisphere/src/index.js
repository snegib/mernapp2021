import React from 'react';
import ReactDOM from 'react-dom';

/* const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => {
      console.log(position);
    },
    error => {
      console.log(error);
    }
  );
  return <div>HI</div>;
}; */

class App extends React.Component {
  // any time when this class is instance is created this construction function is automatically called before anything else.
  constructor(props) {
    /* // automatically called props */
    super(props);
    this.state = { latitude: null, errorMessage: '' };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude });
      },
      error => {
        this.setState({errorMessage: error.message})
      }
    );
  }
  componentDidMount(){
      console.log("componentDidMount");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
}
  render() {
    /* we should not call this type of functionality in render method, the reason is that render method is called all the time. and this functionality will change the position as per user current position every time */
    /* window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        console.log(error);
      }
    ); */
    if(this.state.errorMessage && !this.state.latitude){
        return <div>{this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.latitude){
        return <div>{this.state.latitude}</div>
    }
    else {
        return <div>Loading...</div>
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
