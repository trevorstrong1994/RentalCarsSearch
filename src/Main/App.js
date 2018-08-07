import React, { Component } from 'react';
import SearchResults from './SearchResults';
//import ResultsList from './ResultsList';
import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: '',
    };
  }

  search = (results) =>  {
    fetch('https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows={4}&solrTerm={search_term}')
      .then(response => response.json()) 
      .then(response => {
        this.setState({
          results: response.results,
        });
      })
      .catch(error => {
        console.log("Error fetching results", error);
      });
  }

  render() {
    const { results } = this.state;
    return (
      <div className="container">
        <div className="form-container">
          <form className="form-content">
            <h2 className="form-title"> Where are you going? </h2>
              <label className="form-label" htmlFor="pick-up"> Pick-up Location </label>
              <input
                id="pick-up"
                placeholder="city, airport, station, region, district..."
                type="text"
                value={results}
                onChange={(event) => this.search(event.target.value)}
                className="form-input"
                aria-label="Pick Up Location"
                aria-required="true"
                required
              />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
