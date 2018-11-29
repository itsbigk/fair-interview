import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { VehicleContext } from '../context'
import { convertThousands } from '../utils'

const Vehicle = ({ vehicle }) => (
  <VehicleContext.Consumer>
    {({ favorite, favorites }) => (
      <div key={vehicle.id} className='vehicle columns is-vcentered is-centered'>
        <div className='column is-1' style={{width: '3.3%'}}>
          <i className={`heart ${vehicle.id in favorites ? 'fas' : 'far'} fa-heart fa-lg`}
            onClick={() => favorite(vehicle.id)}></i>
        </div>
        <Link className='column is-7' to={`/${vehicle.id}`}>
          <div className='columns'>
            <div className='column vehicle-image' style={{backgroundImage: `url(${vehicle.image_location_list[0]})`}} />
          </div>
        </Link>
        <div className='column is-4 vehicle-info'>
          <div className='vehicle-info-name'>
            {`${vehicle.model_year} ${vehicle.make} ${vehicle.model}`}
          </div>
          <div className='vehicle-info-details'>
            <div>VIN: {vehicle.id}</div>
            <div>MILES: {convertThousands(vehicle.mileage)}</div>
          </div>
          <div className='vehicle-info-details'>
            <div>Starting fee: ${convertThousands(vehicle.product_financials[0].start_fee_cents / 100)}</div>
            <div>Monthly payment: ${convertThousands(vehicle.product_financials[0].monthly_payment_cents / 100)}</div>
          </div>
        </div>
      </div>
    )}
  </VehicleContext.Consumer>
)

Vehicle.propTypes = {
  vehicle: PropTypes.object.isRequired
}

export default Vehicle
