import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Routes from './routes'
import './styles/application.scss'

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

renderApp(Routes)

if (module.hot) {
  module.hot.accept('./routes', () => {
    renderApp(Routes)
  })
}
