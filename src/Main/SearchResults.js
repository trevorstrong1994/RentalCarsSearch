import React, { Component } from 'react';
//import ResultsList from './ResultsList';
import './styles.css';

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  onSearch = e => {
    this.setState({
      search: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <div>
          <form className="form-content">
            <h2 className="form-title"> Where are you going? </h2>
              <label className="form-label" htmlFor="pick-up"> Pick-up Location </label>
              <input
                id="pick-up"
                placeholder="city, airport, station, region, district..."
                type="text"
                value={this.state.results}
                onChange={this.onChange}
                className="form-input"
                aria-label="Pick Up Location"
                aria-required="true"
                required
              />
          </form>
      </div>
    );
  }
}

export default SearchResults;