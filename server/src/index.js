import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'

import rederer from './utils/renderer'
import createStore from './utils/create-store'

import Routes from './client/routes'

const app = express ()

// Make /public accessible to anyone using the app
app.use(express.static('public'))

// Capture all gets made to route '/'
app.get('*', (req, res) => {

  // Create store on server
  const store = createStore()

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
app.listen(3001, () => {
  console.log('Listening on port 3001')
})
