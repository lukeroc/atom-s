import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Home'

const root =

// Using .hydrate to future-proof code
// .render will no longer work from
// React v17 onwards
ReactDOM.hydrate(
  <Home />,
  document.getElementById('root')
)
