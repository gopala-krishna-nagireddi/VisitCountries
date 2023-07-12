import './index.css'

const CountriesListItem = props => {
  const {countryDetails, onVisitCountry} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisitBtn = () => {
    onVisitCountry(id)
  }

  return (
    <li className="country-list-item">
      <p className="name-of-country">{name}</p>
      {isVisited ? (
        <p className="visited-btn" type="button">
          Visited
        </p>
      ) : (
        <button
          className="btn visit-btn"
          type="button"
          onClick={onClickVisitBtn}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesListItem
