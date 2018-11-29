import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const LazyDetailPage = React.lazy(() => import('./Detail'))

const Detail = ({ match }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyDetailPage id={match.params.id} />
  </Suspense>
)

Detail.propTypes = {
  match: PropTypes.object.isRequired
}

import Nav from '../components/Nav'
import Vehicles from './Vehicles'
import { VehicleProvider } from '../context'

const Routes = () => (
    <Router>
      <VehicleProvider>
        <Nav />
        <div className='container'>
          <Route exact path='/' component={Vehicles} />
          <Route path='/:id' component={Detail} />
        </div>
      </VehicleProvider>
    </Router>
)

export default Routes
