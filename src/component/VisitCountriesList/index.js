import {Component} from 'react'
import CountriesItem from '../CountriesItem'
import VistedCountryItem from '../VistedCountryItem'
import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class VisitCountriesList extends Component {
  state = {
    countriesList: initialCountriesList,
    visitedList: initialCountriesList,
  }

  onAddVisitButton = id => {
    const {countriesList} = this.state

    const visitedCountries = countriesList.map(eachItem => {
      if (eachItem.id === id) {
        const updatedList = {...eachItem, isVisited: !eachItem.isVisited}
        return updatedList
      }
      return eachItem
    })
    this.setState({
      countriesList: visitedCountries,
      visitedList: visitedCountries,
    })
  }

  onRemove = id => {
    const {countriesList, visitedList} = this.state
    const removedCountries = visitedList.filter(eachItem => eachItem.id !== id)
    const visitedCountries = countriesList.map(eachItem => {
      if (eachItem.id === id) {
        const updatedList = {...eachItem, isVisited: !eachItem.isVisited}
        return updatedList
      }
      return eachItem
    })
    this.setState({
      countriesList: visitedCountries,
      visitedList: removedCountries,
    })
  }

  render() {
    const {countriesList, visitedList} = this.state
    const updatedList = visitedList.filter(
      country => country.isVisited === true,
    )

    return (
      <div className="bg-App-container">
        <div className="content-container">
          <div className="countries-container">
            <h1 className="countries-heading">Countries</h1>
            <ul className="countries-list-container">
              {countriesList.map(eachItem => (
                <CountriesItem
                  countriesDetails={eachItem}
                  key={eachItem.id}
                  onAddVisitButton={this.onAddVisitButton}
                />
              ))}
            </ul>
          </div>
          <div className="visited-countries-container">
            <h1 className="visited-countries-heading">Visited Countries</h1>
            {updatedList.length > 0 ? (
              <ul className="visited-countries-list">
                {updatedList.map(eachItem => (
                  <VistedCountryItem
                    key={eachItem.id}
                    visitedCountryDetails={eachItem}
                    onRemove={this.onRemove}
                  />
                ))}
              </ul>
            ) : (
              <div className="no-countries-container">
                <p className="no-countries-message">
                  No Countries Visited Yet!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default VisitCountriesList
