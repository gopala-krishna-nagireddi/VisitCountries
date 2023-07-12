import './index.css'

const VisitedCountriesListItem = props => {
  const {countryDetails, onRemoveCountry} = props
  const {id, name, imageUrl} = countryDetails

  const onClickRemoveBtn = () => {
    onRemoveCountry(id)
  }

  return (
    <li className="visited-country-item">
      <div className="visited-item">
        <img className="country-flag" src={imageUrl} alt="thumbnail" />
        <div className="name-remove-container">
          <p className="country-name">{name}</p>
          <button
            className="remove-btn"
            type="button"
            onClick={onClickRemoveBtn}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountriesListItem
