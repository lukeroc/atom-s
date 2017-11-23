import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

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

export default {
  component: App
}
