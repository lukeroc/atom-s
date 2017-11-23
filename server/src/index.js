import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'

import rederer from './utils/renderer'
import createStore from './utils/create-store'

import Routes from './client/routes'

const app = express ()

// Set express proxy for api requests
// Action creators will send endpoints and
// any request made to /api will be proxied
// to api url and append the endpoint

// TODO: Change api url to const
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {

  // optional parameter to allow header config
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000' // TODO: change to requester const
    return opts
  }
}))

// Make /public accessible to anyone using the app
app.use(express.static('public'))

// Capture all gets made to route '/'
app.get('*', (req, res) => {

  // Create store on server
  const store = createStore(req)

  // Match Routes with request path
  // If match, load data with loadData function
  const dataLoadedPromises = matchRoutes(Routes, req.path).map(({ route }) => {

    // If route has loadData function, run it
    return route.loadData ? route.loadData(store) : null
  })

  // Wait for all data loaded promises to resolve
  // and send initial HTML back to request initiator
  Promise.all(dataLoadedPromises).then(() => {

    // Send back content to whoever made the request
    res.send(rederer(req, store))
  })
})

// Start listeing on a port
app.listen(3000, () => {
  console.log('Listening on port 3000')
})
