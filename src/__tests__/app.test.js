import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Routes from '../routes'

configure({ adapter: new Adapter() })

// mocking fetch call for list of vehicles
beforeEach(() => {
  class LocalStorageMock {
    constructor() {
      this.store = {}
    }

    getItem(key) {
      return this.store[key] || null
    }

    setItem(key, value) {
      this.store[key] = value.toString()
    }
  }


  global.localStorage = new LocalStorageMock

  global.fetch = jest.fn().mockImplementation(() => {
    const p = new Promise((resolve, reject) => {
      resolve({
        ok: true,
        current_page: 1,
        page_count: 11,
        vehicles: [
          {
            id: 1234,
            image_location_list: [
              'http://cdn-prod.prod.fair.engineering/vehicle-images/0640_032_png/MY2016/10846/10846_cc0640_032_BS.png'
            ],
            mileage: 1234,
            make: 'Honda',
            model: 'Civic Sedan',
            model_year: 2016,
            product_financials: [
              {
                id: 1234,
                monthly_payment_cents: 30000,
                start_fee_cents: 90000
              }
            ]
          }
        ]
      })
    })

    return p
  })
})

describe('app', () => {
  it('renders without crashing', () => {
    mount(<Routes />)
  })
})
