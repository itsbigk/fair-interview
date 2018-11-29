import React from 'react'
import { Link } from 'react-router-dom'

import Vehicle from '../components/Vehicle'
import { VehicleContext } from '../context'
import '../styles/routes/vehicles.scss'

const paginationButtonStyle = {
  textDecoration: 'none'
}

const Vehicles = () => (
  <div className='app'>
    <div className='vehicles-container columns'>
      <VehicleContext.Consumer>
        {({ vehicles, currentPage, pageCount, pageClick }) => (
          <div className='vehicles'>
            {vehicles && vehicles.map(vehicle => (
              <Vehicle key={vehicle.id} vehicle={vehicle} />
            ))}
            <div className='vehicles-pagination columns'>
              <div className='column is-2 is-offset-10'>
                {currentPage > 1 &&
                  <Link
                    style={paginationButtonStyle}
                    className='button is-primary is-outlined'
                    onClick={() => pageClick(currentPage - 1)}
                    to={{pathname: '/', search: `?page=${currentPage - 1}`}}
                    >
                    Previous
                    <span className="icon is-small">
                      <i className="fas fa-chevron"></i>
                    </span>
                  </Link>
                }
                {currentPage !== pageCount &&
                  <Link
                    style={paginationButtonStyle}
                    className='button is-primary is-outlined'
                    onClick={() => pageClick(currentPage + 1)}
                    to={{pathname: '/', search: `?page=${currentPage + 1}`}}
                    >
                    Next
                    <span style={{marginLeft: '5px'}} className="icon is-small">
                      <i className="fas fa-chevron-right"></i>
                    </span>
                  </Link>
                }
              </div>
            </div>
          </div>
        )}
      </VehicleContext.Consumer>
    </div>
  </div>
)

Vehicles.PropTypes

export default Vehicles
