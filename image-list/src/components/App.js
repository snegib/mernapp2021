import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  onSearchSubmit(entry) {
    console.log(entry);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '30px' }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
