import './index.css'

const CountriesItem = props => {
  const {countriesDetails, onAddVisitButton} = props
  const {id, name, isVisited} = countriesDetails

  const onAddingVisited = () => {
    onAddVisitButton(id)
  }
  const visitedText = isVisited ? 'Visited' : 'Visit'

  return (
    <li className="countries-item-container">
      <p className="country-name">{name}</p>
      {isVisited === true ? (
        <p className="visited-text">{visitedText}</p>
      ) : (
        <button
          type="button"
          className="country-visit-button"
          onClick={onAddingVisited}
        >
          {visitedText}
        </button>
      )}
    </li>
  )
}

export default CountriesItem
