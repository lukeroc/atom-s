import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import reducers from '../client/reducers'

export default (req) => {

  // Create a server instance of axios
  const axiosServer = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    header: {
      cookie: req.get('cookie') || ''
    }
  })

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosServer)) // Add axios server instance to redux thunk
  )

  return store
}
