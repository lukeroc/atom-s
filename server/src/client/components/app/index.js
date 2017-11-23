import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

import { fetchCurrentUser } from '../../actions'

import Header from '../organisms/header'

class App extends Component {
  render () {
    return (
      <main className="app">
        <Header />
        <article>
          { renderRoutes(this.props.route.routes) }
        </article>
      </main>
    )
  }
}

// Load SSR data for current user
const loadData = ({ dispatch }) => {
  return dispatch( fetchCurrentUser() )
}

export default {
  component: App,
  loadData
}
