import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  selectSuggestion = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachOne =>
      eachOne.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-con">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="card-con">
          <div>
            <img
              className="image-sm"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              className="inputEle"
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              placeholder="Search Google"
            />
          </div>

          <ul>
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                eachSuggestion={eachSuggestion}
                key={eachSuggestion.id}
                selectSuggestion={this.selectSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
