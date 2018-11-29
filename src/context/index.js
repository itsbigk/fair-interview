import React from 'react'
import PropTypes from 'prop-types'

const vehicleEndpoint = 'https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page='
const VehicleContext = React.createContext()

class VehicleProvider extends React.Component {
  static propTypes = {
    children: PropTypes.array.isRequired
  }
  state = {
    vehicles: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || {},
    favorite: id => this.favorite(id),
    pageClick: page => this.pageClick(page)
  }

  componentDidMount () {
    const params = new URLSearchParams(window.location.search)

    fetch(vehicleEndpoint + (params.get('page') || ''))
      .then(res => res.json())
      .then(json => {
        const { data } = json

        this.setState({
          currentPage: data.current_page,
          pageCount: data.page_count,
          vehicles: data.vehicles
        })
      })
  }

  favorite = id => {
    let favorites = JSON.parse(localStorage.getItem('favorites'))

    if (favorites && id in favorites) {
      delete favorites[id]
    } else if (favorites) {
      favorites[id] = null
    } else {
      favorites = {[id]: null}
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
    this.setState({ favorites })
  }

  pageClick = page => {
    fetch(vehicleEndpoint + page)
      .then(res => res.json())
      .then(json => {
        const { data } = json

        this.setState({
          currentPage: data.current_page,
          pageCount: data.page_count,
          vehicles: data.vehicles
        })
      })
  }

  render () {
    return (
      <VehicleContext.Provider value={this.state}>
        {this.props.children}
      </VehicleContext.Provider>
    )
  }
}

export { VehicleContext, VehicleProvider }
