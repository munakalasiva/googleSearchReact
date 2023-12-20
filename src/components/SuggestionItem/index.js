import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, selectSuggestion} = props
  const {suggestion} = eachSuggestion

  const onSelectSuggestion = () => {
    selectSuggestion(suggestion)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <button type="button" onClick={onSelectSuggestion} className="btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
