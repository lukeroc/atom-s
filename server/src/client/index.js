import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'

import Routes from './routes'

const store = createStore(reducers, {}, applyMiddleware(thunk))

// Using .hydrate to future-proof code
// .render will no longer work from
// React v17 onwards
ReactDOM.hydrate(
  <Provider store={ store }>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
