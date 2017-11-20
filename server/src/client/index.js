import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

// Using .hydrate to future-proof code
// .render will no longer work from
// React v17 onwards
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
)
