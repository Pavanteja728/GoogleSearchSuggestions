// Write your code here
import {Component} from 'react'

import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  updateSearch = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state

    const {suggestionsList} = this.props

    const filterData = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bgCont">
        <div className="cardCont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="gooImg"
          />
          <div className="googleCard">
            <div className="searchBar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="searchBar"
                onChange={this.onSearchInput}
                value={searchInput}
              />
            </div>

            <ul>
              {filterData.map(each => (
                <SuggestionItem
                  suggestionItem={each}
                  key={each.id}
                  updateSearch={this.updateSearch}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
