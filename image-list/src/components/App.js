import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  async onSearchSubmit(entry) {
    console.log(entry);
    const response = await axios.get(`
    https://pixabay.com/api/?key=24816258-76261dbb937f3f3e7cc22bcde&q=${entry}&image_type=photo`);
    console.log(response.data.hits);
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
