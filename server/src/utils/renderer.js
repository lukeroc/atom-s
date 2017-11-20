import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from '../client/routes'

export default (req, store) => {

  // Render to string the target component
  // Same as passing JSX to RenderDOM
  const content = renderToString(
    <Provider store={ store }>
      <StaticRouter location={ req.path } context={ {} }>
        <Routes />
      </StaticRouter>
    </Provider>
  )

  // Make client app available from SSR
  return `
    <html>
      <head></head>
      <body>
        <main id="root">${content}</main>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
