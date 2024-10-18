import './index.css'

const VistedCountryItem = props => {
  const {visitedCountryDetails, onRemove} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onRemoveVistedCountry = () => {
    onRemove(id)
  }
  return (
    <li className="visited-country-item">
      <img src={imageUrl} className="country-img" alt="thumbnail" />
      <div className="country-name-remove-container">
        <p className="visited-country-name">{name}</p>
        <button
          type="button"
          className="visited-country-remove-btn"
          onClick={onRemoveVistedCountry}
          data-testid="delete"
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VistedCountryItem
