import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

import Header from '../organisms/header'

class App extends Component {
  render () {

    const { routes } = this.props.route

    return (
      <article className="app">
        <Header />
        { renderRoutes(routes) }
      </article>
    )
  }
}

export default {
  component: App
}
