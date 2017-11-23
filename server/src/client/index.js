import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config' // SSR rendering of routes with data
import axios from 'axios'

import reducers from './reducers'

import Routes from './routes'

const axiosClient = axios.create({
  baseURL: '/api'
})

const store = createStore(
  reducers,
  window.INITIAL_STATE, // has same state dumped by server
  applyMiddleware(thunk.withExtraArgument(axiosClient)) // pass in axios instance with redux thuk to handle SSR auth requests
)

// Using .hydrate to future-proof code
// .render will no longer work from
// React v17 onwards
ReactDOM.hydrate(
  <Provider store={ store }>
    <BrowserRouter>
      <div>{ renderRoutes(Routes) }</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
