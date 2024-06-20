// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateSearch} = props
  const {suggestion} = suggestionItem

  const selectItem = () => {
    updateSearch(suggestion)
  }
  return (
    <l1 className="lists">
      <p className="para">{suggestion}</p>
      <button className="button" type="button" onClick={selectItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrows"
        />
      </button>
    </l1>
  )
}

export default SuggestionItem
