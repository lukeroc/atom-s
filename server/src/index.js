import express from 'express'
import rederer from './utils/renderer'

const app = express ()

// Make /public accessible to anyone using the app
app.use(express.static('public'))

// Capture all gets made to route '/'
app.get('/', (req, res) => {

  // Send back content to whoever made the request
  res.send(rederer())
})

// Start listeing on a port
app.listen(3001, () => {
  console.log('Listening on port 3001')
})