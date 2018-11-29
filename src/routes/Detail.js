import React from 'react'
import PropTypes from 'prop-types'
import '../styles/routes/detail.scss'

import { convertThousands } from '../utils'
const detailEndpoint = 'https://private-4e19e-interviewapi3.apiary-mock.com/vehicles/'

class Detail extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  }

  state = {
    fetching: true,
    vehicle: {},
    hasError: false
  }

  componentDidMount () {
    fetch(detailEndpoint + this.props.id)
      .then(res => res.json())
      .then(json => {
        const { vehicle } = json.data

        this.setState({
          fetching: false,
          vehicle
        })
      })
      .catch(() => {
        this.setState({
          hasError: true
        })
      })
  }

  render () {
    const { fetching, vehicle, hasError } = this.state
    const { image_location_list, product_financials } = vehicle

    if (hasError) {
      return (
        <div className='detail-error'>Vehicle not found</div>
      )
    }

    return (
      <div className='detail columns is-centered'>
        {!fetching && Object.keys(vehicle).length !== 0 &&
          <div className='column is-8'>
            <div className='detail-image' style={{backgroundImage: `url(${image_location_list[0]})`}}></div>
            <div className='detail-image-count'>1 / {image_location_list.length}</div>
            <div className='detail-inner column'>
              <div className='detail-info columns is-centered'>
                <div className='make'>{vehicle.model_year} {vehicle.make}</div>
                <div className='model'>{vehicle.model} {vehicle.trim}</div>
                <div className='mileage columns'>
                  <div className='count column'>{convertThousands(vehicle.mileage)} Mi.</div>
                  <div className='column'>VEHICLE FEATURES <i className="fas fa-chevron-right"></i></div>
                </div>
                <div className='payments columns'>
                  <div className='column payment'>
                    <div className='payment-type'>Monthly Pymt.</div>
                    <div className='monthly price'>${product_financials[0].monthly_payment_cents / 100}</div>
                  </div>
                  <div className='column payment'>
                    <div className='payment-type'>Start Pymt.</div>
                    <div className='starting price'>${product_financials[0].start_fee_cents / 100}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Detail
