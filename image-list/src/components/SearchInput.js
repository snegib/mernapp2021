/* this will be class based component as we use state  */
import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: '',
    };

    /* this.onFormSubmit = this.onFormSubmit.bind(this); // if not bind here then use arrow function in onFormSubmit function, instead of assign object.  */
  }
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  /* onFormSubmit(event) { */
  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.entry);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} action="ui form">
          <div className="field">
            <div className="ui massive icon input">
              {/* onChange={this.onInputChange} here we are not invoke method by using (), because if we do so then it will automatically call render method. instead we want to call that function at some point of time in future (onSubmit/onclick) so only give the reference here*/}
              <input
                type="text"
                placeholder="search..."
                onChange={event => {
                  this.setState({ entry: event.target.value });
                }}
                value={this.state.entry}
                // onChange={this.onInputChange}
                /* onChange={(event)=> {console.log(event.target.value)}} // uncontrolled form element. add state and update it through state is makes this element 'controlled element' */
              />{' '}
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
